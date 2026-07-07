-- Create Testimonials table
create table public.testimonials (
  id uuid default gen_random_uuid() primary key,
  author_name text not null,
  author_title text,
  content text not null,
  status text check (status in ('pending', 'approved', 'rejected')) default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create Comments table
create table public.comments (
  id uuid default gen_random_uuid() primary key,
  testimonial_id uuid references public.testimonials(id) on delete cascade not null,
  author_name text not null,
  content text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.testimonials enable row level security;
alter table public.comments enable row level security;

-- Policies for Testimonials
-- 1. Public can insert new pending testimonials
create policy "Anyone can insert testimonials" on public.testimonials
  for insert with check (status = 'pending');

-- 2. Public can view ONLY approved testimonials
create policy "Anyone can view approved testimonials" on public.testimonials
  for select using (status = 'approved');

-- 3. Admin (authenticated user) has full access
create policy "Admin has full access to testimonials" on public.testimonials
  for all using (auth.role() = 'authenticated');

-- Policies for Comments
-- 1. Public can insert comments ONLY on approved testimonials
create policy "Anyone can insert comments" on public.comments
  for insert with check (
    exists (
      select 1 from public.testimonials t
      where t.id = testimonial_id and t.status = 'approved'
    )
  );

-- 2. Public can view comments
create policy "Anyone can view comments" on public.comments
  for select using (
    exists (
      select 1 from public.testimonials t
      where t.id = testimonial_id and t.status = 'approved'
    )
  );

-- 3. Admin (authenticated user) has full access
create policy "Admin has full access to comments" on public.comments
  for all using (auth.role() = 'authenticated');
