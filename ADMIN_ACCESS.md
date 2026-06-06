# Admin Dashboard Access

## 1. Configure environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_REGISTRATION_TEMPLATE_ID=
```

Restart the dev server after changing `.env.local`.

## 2. Create the database schema

Run `supabase/schema.sql` in the Supabase SQL editor.

## 3. Create an admin user

Create a Supabase Auth user from the Supabase dashboard, then insert or update their profile role:

```sql
insert into public.profiles (id, full_name, role)
values ('YOUR_AUTH_USER_ID', 'Admin User', 'admin')
on conflict (id) do update set role = 'admin';
```

Alternatively, set the Auth user's `user_metadata` to:

```json
{ "role": "admin" }
```

## 4. Sign in

Open `/login`, sign in with the admin email and password, then go to `/dashboard`.
