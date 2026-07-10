# HTTPS Setup Guide for Olivesteel Website
## Step-by-Step Instructions for Vercel Custom Domain Configuration

**Time Required:** 15 minutes (setup) + 24-48 hours (DNS propagation)  
**Cost:** FREE (Let's Encrypt SSL via Vercel)  
**Difficulty:** Easy

---

## Prerequisites

Before you start, you'll need:
- Vercel account (where your website is deployed)
- Access to your domain registrar account (GoDaddy, Namecheap, Google Domains, etc.)
- The domain name: `olivesteel.com`

---

## Part 1: Configure Domain in Vercel (5 minutes)

### Step 1: Log into Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Log in"** (top right)
3. Enter your email and password
4. You'll see your projects dashboard

### Step 2: Open Your Project

1. Look for your project (likely named "Olive-steel" or similar)
2. Click on the project name to open it
3. You'll see the project overview page

### Step 3: Go to Project Settings

1. Click the **"Settings"** tab (top navigation menu)
   - You should see: Overview | Deployments | Settings | etc.
2. Click **"Settings"**

### Step 4: Navigate to Domains

1. In the left sidebar, look for **"Domains"**
2. Click on **"Domains"**
3. You'll see a section that says "Add Domain"

### Step 5: Add Your Domain

1. Find the text field that says "Enter your domain"
2. Type: `olivesteel.com` (without http:// or www)
3. Click **"Add"** or **"Add Domain"** button
4. Wait a moment for Vercel to process

### Step 6: Copy Vercel's Nameservers

After adding the domain, Vercel will show you four nameserver addresses. They look like:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

**IMPORTANT:** Copy these four nameservers - you'll need them in the next step.

You can:
- Take a screenshot
- Write them down
- Copy them to a text file

---

## Part 2: Update Domain Registrar (10 minutes)

Now you need to tell your domain registrar to use Vercel's nameservers.

### Find Your Domain Registrar

First, figure out where you purchased `olivesteel.com`. It could be:
- GoDaddy
- Namecheap
- Google Domains
- 1&1
- Bluehost
- HostGator
- Etc.

**Not sure?** You can check here: [https://www.whois.com](https://www.whois.com)
- Enter: `olivesteel.com`
- Look for "Registrar" field

### Option A: If your registrar is GoDaddy

1. Go to [godaddy.com](https://godaddy.com)
2. Click **"Sign in"** (top right)
3. Enter your login credentials
4. Click on **"My Products"** (top navigation)
5. Find **"olivesteel.com"** in the list
6. Click on it to open domain settings
7. Look for **"Nameservers"** section
8. Click **"Change Nameservers"** button
9. Select **"I'll use my own nameservers"**
10. Delete any existing nameservers
11. Paste the 4 Vercel nameservers:
    - ns1.vercel-dns.com
    - ns2.vercel-dns.com
    - ns3.vercel-dns.com
    - ns4.vercel-dns.com
12. Click **"Save"**
13. You'll see a confirmation message

### Option B: If your registrar is Namecheap

1. Go to [namecheap.com](https://namecheap.com)
2. Click **"Sign in"** (top right)
3. Click **"Dashboard"**
4. Find **"olivesteel.com"** in your domains list
5. Click **"Manage"** next to the domain
6. Click the **"Nameservers"** tab
7. Select **"Custom DNS"** from dropdown
8. Delete existing nameservers
9. Add the 4 Vercel nameservers:
    - ns1.vercel-dns.com
    - ns2.vercel-dns.com
    - ns3.vercel-dns.com
    - ns4.vercel-dns.com
10. Click the checkmark or **"Save Changes"**

### Option C: If your registrar is Google Domains

1. Go to [domains.google.com](https://domains.google.com)
2. Click **"Sign in"** (top right)
3. Find **"olivesteel.com"** in your domains
4. Click on it
5. In the left menu, click **"DNS"**
6. Scroll down to **"Name servers"** section
7. Click **"Use custom name servers"**
8. Delete any existing nameservers
9. Add the 4 Vercel nameservers:
    - ns1.vercel-dns.com
    - ns2.vercel-dns.com
    - ns3.vercel-dns.com
    - ns4.vercel-dns.com
10. Click **"Save"**

### Option D: Other Registrars

The process is similar:
1. Log into your domain registrar
2. Find domain management or DNS settings
3. Look for "Nameservers" or "DNS Management"
4. Switch to "Custom Nameservers" or "Use Custom DNS"
5. Replace existing nameservers with Vercel's 4 nameservers
6. Save changes

**If you're stuck:** Contact your registrar's support chat. They'll help you change nameservers in 2 minutes.

---

## Part 3: Wait for DNS Propagation (24-48 hours)

After updating nameservers:

1. DNS changes take 24-48 hours to propagate globally
2. You can check progress here: [whatsmydns.net](https://whatsmydns.net)
   - Enter: `olivesteel.com`
   - You'll see different servers reporting the nameserver
   - Green checkmarks = propagated
   - Red X's = still propagating
3. Be patient! Don't refresh multiple times.

---

## Part 4: Verify HTTPS is Active (After DNS Propagates)

Once DNS has propagated (after 24-48 hours):

### Check 1: Visit Your Website

1. Open a web browser (Chrome, Firefox, Safari, Edge)
2. Go to: `https://olivesteel.com` (note: HTTPS, not HTTP)
3. Look for a **padlock icon** 🔒 in the address bar
4. The address bar should show green (secure)
5. You should NOT see "Not Secure" warning

### Check 2: Verify in Vercel

1. Go back to Vercel project settings
2. Click on **"Domains"**
3. Find **"olivesteel.com"** in the list
4. Next to it, you should see: **"Valid Configuration"** or ✅ checkmark
5. Below it will say: **"SSL certificate issued"** or **"SSL/TLS certificate"** ✅

### Check 3: View SSL Certificate Details

1. Go to `https://olivesteel.com`
2. Click the padlock icon 🔒 in address bar
3. Click **"Connection is secure"** or **"Certificate"**
4. You should see details showing:
   - **Issued by:** Let's Encrypt (or Vercel)
   - **Valid until:** (date 1 year from now)
   - **Domain:** olivesteel.com

---

## Part 5: Test Everything Works

### Test 1: HTTP Auto-Redirects to HTTPS

1. Go to `http://olivesteel.com` (note: HTTP, not HTTPS)
2. The page should automatically redirect to `https://olivesteel.com`
3. You should see the padlock 🔒 (secure)

### Test 2: Contact Form Works

1. Go to the contact page
2. Fill out the contact form
3. Submit it
4. You should get a success message
5. reCAPTCHA should work without errors

### Test 3: All Links Work

1. Click around the site
2. Try the footer Privacy Policy link
3. Try the footer Terms of Service link
4. Try the contact phone link (should open tel: on mobile)
5. Try the contact email link (should open email app)

### Test 4: Mobile Works

1. Open site on mobile phone or tablet
2. Go to `https://olivesteel.com`
3. Verify padlock 🔒 shows
4. Test that tap phone number initiates a call
5. Test that tap email opens email app

---

## Troubleshooting

### Problem: DNS Still Shows "Invalid Configuration"

**Solution:**
- DNS propagation takes 24-48 hours
- Check at [whatsmydns.net](https://whatsmydns.net)
- If still red after 48 hours:
  1. Go back to your domain registrar
  2. Verify the 4 nameservers are exactly correct (copy from Vercel again)
  3. Make sure you didn't accidentally add extra characters or spaces
  4. Save changes again
  5. Wait another 24 hours

### Problem: "Certificate is pending" in Vercel

**Solution:**
- Vercel is waiting for DNS to propagate
- Can take up to 48 hours
- Check back in 24 hours
- Don't cancel or remove the domain

### Problem: "Not Secure" warning in browser

**Solution:**
1. Wait 30 minutes (certificate might still be provisioning)
2. Hard refresh the page: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Close and reopen browser
4. Try a different browser
5. Clear browser cache
6. If still issues after 2 hours, contact Vercel support

### Problem: "This connection is not private" error

**Solution:**
- Certificate is still being provisioned (can take up to 1 hour after DNS propagates)
- Wait 30 minutes
- Refresh page
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Try incognito/private mode

### Problem: "Connection timed out"

**Solution:**
- DNS might still be propagating
- Check at [whatsmydns.net](https://whatsmydns.net)
- Wait 24 more hours if still red
- Contact Vercel support if after 48 hours

### Need Help?

Contact Vercel Support:
1. Go to [vercel.com](https://vercel.com)
2. Click your avatar (bottom left of dashboard)
3. Click **"Support"**
4. Click **"Contact Support"**
5. Explain the issue and they'll help in minutes

---

## Timeline

| Time | Action | Status |
|------|--------|--------|
| **Now** | Add domain in Vercel | ✅ Your turn |
| **Now** | Update nameservers at registrar | ✅ Your turn |
| **0-30 min** | Nameserver update processes | ⏳ Automatic |
| **30 min - 24 hours** | DNS propagates globally | ⏳ Wait |
| **24-48 hours** | SSL certificate issued automatically | ⏳ Wait |
| **After 48 hours** | Verify HTTPS works | ✅ Your turn |

---

## Success Checklist

After completing all steps, you should have:

- [ ] Domain added in Vercel
- [ ] Vercel nameservers copied
- [ ] Domain registrar nameservers updated
- [ ] Waited 24-48 hours
- [ ] Website accessible at `https://olivesteel.com` ✅
- [ ] Padlock 🔒 icon visible in browser
- [ ] "Valid Configuration" shows in Vercel
- [ ] HTTP auto-redirects to HTTPS
- [ ] Contact form works
- [ ] All security headers active
- [ ] SSL certificate shows "Let's Encrypt"

---

## Quick Reference

**Vercel Steps:**
1. Login to vercel.com
2. Go to project settings
3. Click "Domains"
4. Add "olivesteel.com"
5. Copy 4 nameservers

**Registrar Steps:**
1. Login to domain registrar
2. Find DNS/Nameserver settings
3. Select "Custom Nameservers"
4. Paste Vercel's 4 nameservers
5. Save

**Wait & Verify:**
1. Wait 24-48 hours
2. Visit https://olivesteel.com
3. Check for padlock 🔒
4. Verify in Vercel "Valid Configuration"

---

## What Happens Next

Once HTTPS is active:
- ✅ All data encrypted in transit
- ✅ All security headers active (CSP, HSTS, etc.)
- ✅ Browsers show secure padlock 🔒
- ✅ Google improves search rankings
- ✅ Compliant with DPDP Act 2023, GDPR, CCPA
- ✅ Professional appearance
- ✅ Customers trust the site more

---

## Support

If you get stuck at any point:

**Vercel Support:**
- Email/Chat: vercel.com/support
- Docs: vercel.com/docs

**Domain Registrar Support:**
- GoDaddy: godaddy.com/support
- Namecheap: namecheap.com/support
- Google Domains: google.com/domains/support

**Still need help?** Reply with the specific step you're stuck on and I can provide more detailed help.

---

## Important Notes

1. **Do NOT delete the old domain** until HTTPS is fully working
2. **Do NOT change anything else** during DNS propagation
3. **Do NOT cancel the Vercel certificate request**
4. **Be patient** - DNS takes 24-48 hours, this is normal
5. **Don't refresh constantly** - it won't speed up propagation

---

**Status:** Ready to configure HTTPS ✅

Once you complete these steps, your website will be:
- 🔒 Secure (HTTPS)
- ✅ Compliant (GDPR, CCPA, DPDP)
- 🚀 SEO Optimized (Google rankings)
- 💼 Professional (padlock shows)

Good luck! Let me know if you need help with any step.

