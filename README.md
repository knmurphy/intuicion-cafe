# Intuición Café

[![Netlify Status](https://api.netlify.com/api/v1/badges/9f6e1e09-1b87-4933-b3f2-6853720a7af0/deploy-status)](https://app.netlify.com/sites/intuicioncafe/deploys)

## Set Up Identity Email Templates

In order for Netlify Identity service emails (Signup, Reset Password etc) to function correctly with Decap CMS, you will need to tell Netlify where your email templates are located.

Inside this repo under `/admin/email-templates/` are four Netlify Identity email templates. Inside your Netlify site settings, you will need to navigate to: "Site Settings > Identity" and look there for the four email template configuration boxes: Invitation template, Confirmation template, Recovery template, and Email change template. Inside each, edit the "Path to template" field to match the root-relative path to each template. For example:

`/admin/email-templates/invitation.html`

Now you're all set; you can invite new CMS users and begin editing content!

## 5. Run Eleventy (builds the site)

```
npx @11ty/eleventy
```

Or build automatically when a template changes:
```
npx @11ty/eleventy --watch
```

Or build and host locally for local development:
```
npx @11ty/eleventy --serve
```

Or in debug mode:
```
DEBUG=* npx @11ty/eleventy
```
