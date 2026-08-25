# BookMyTestIreland

Production-ready static website for BookMyTestIreland, an independent driving-test appointment booking assistance service for customers in Ireland.

## What is included

- Static HTML, CSS and vanilla JavaScript only
- Public service pages, contact page and legal policy pages
- Central configuration in `assets/js/config.js`
- PayPal payment page integration point
- Payment success and failure pages for future redirects
- SEO files: `robots.txt` and `sitemap.xml`
- Cloudflare Pages headers and redirects

## Configuration before launch

Edit `assets/js/config.js`:

- `paypalPaymentUrl`: currently set to `https://www.paypal.com/ncp/payment/WV8VU9P3FJ8E2`
- `supportEmail`: currently set to `bookmytestireland@gmail.com`
- `supportPhone`: currently set to `+91 8281949286`
- `whatsappUrl`: currently set to `https://wa.me/918281949286`
- `domain`: update if the final domain differs from `https://bookmytestireland.com`
- refund and service-start placeholders: replace only after the business owner confirms policy decisions

Payment buttons intentionally do not redirect when the payment URL is blank. They show: "Secure online payment will be available shortly."

## Cloudflare Pages deployment

### Option 1: GitHub connection

1. Create a GitHub repository for this folder.
2. Upload or push all files.
3. In Cloudflare Pages, choose "Create a project" and connect the repository.
4. Framework preset: None.
5. Build command: leave blank.
6. Build output directory: `/` or the repository root, depending on Cloudflare's UI.
7. Deploy.
8. Add the production domain when ready.

### Option 2: Direct upload

1. Open Cloudflare Pages.
2. Choose direct upload.
3. Upload the full project folder contents.
4. Confirm that `index.html`, legal pages, `_headers`, `_redirects`, `robots.txt` and `sitemap.xml` are included.

## Future payment gateway notes

Version 1 uses a PayPal payment page. Do not put payment-provider secret values in browser-side JavaScript.

If a full payment gateway integration is added later, payment order creation and payment verification must run through a secure backend or serverless function such as a Cloudflare Worker.

## Payment provider review checklist

- Business description is visible on the homepage.
- Price is visible on homepage and pricing page.
- How the service works is public.
- Contact page is public.
- Terms & Conditions are public.
- Privacy Policy is public.
- Refund & Cancellation Policy is public.
- Service Delivery Policy is public.
- Disclaimer is public.
- Operator identity is disclosed as AJAY ANIL SREE.
- RSA independence is clearly stated.
