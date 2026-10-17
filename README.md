# Lola’s Café Website

A mobile-friendly website for Lola’s Café (Ekrejeta, Abraka, Delta State) with a working cart that sends orders to WhatsApp.

## Files

| File | What it does |
|---|---|
| `index.html` | Page structure, contact section, embedded logo |
| `style.css` | All colours, fonts and layout (light and dark mode) |
| `script.js` | Menu data, cart, and WhatsApp ordering |
| `README.md` | This guide |

Keep all files in the same folder with these exact names.

## Run it

Double-click `index.html` to open it in any browser. No installation needed. An internet connection is only needed for the Google Fonts.

## Put it online

Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your own web hosting) and connect a domain such as `lolascafe.ng`.

## How ordering works

1. The customer picks items from the menu tabs and taps **Add**.
2. They open the cart, choose Pickup or Delivery, and enter name, phone and address.
3. **Send order on WhatsApp** opens WhatsApp with the full order and total written out, addressed to the café.
4. The café confirms the delivery fee and payment in the chat.

The cart is saved in the customer’s browser, so it survives a refresh.

## Common edits

**Change the WhatsApp number** (`script.js`): find `const WA='2349015704346'` and replace it with the new number in international format, no `+` or spaces (Nigeria: `234` followed by the number without the leading 0).

**Change a price or add an item** (`script.js`): items sit in the `C` list, grouped by category. Each item looks like:

```js
['Item name', 'Short description', [['Option label', price], ['Another option', price]]]
```

Items with one option show no dropdown. Add a new line inside a category to add an item.

**Add drink prices** (`script.js`): drinks are in the `D` list as names only. To make them orderable, move them into the `C` list with prices like the other categories.

**Change phone numbers** (`index.html`): in the “Come say hi” section, update both the `tel:` links and the visible text.

**Change social links** (`index.html`): TikTok is `@lolascafe.ng`. The Instagram link is `instagram.com/lolascafe.ng`, so check it matches the real account.

**Change colours** (`style.css`): edit the variables at the top (`--rose`, `--blush`, `--peach`, `--bg`, `--ink`). The dark-mode values are right below them.

**Change the logo** (`index.html`): the logo is embedded as a data image in two places (header and hero). Replace both `src="data:image/jpeg;base64,..."` values with `src="logo.png"` after adding your logo file to the folder.

## Before going live

- Double-check every price against the café’s current menu.
- Confirm the WhatsApp number is the one that receives orders.
- Confirm the Instagram handle.
- Add drink prices if you want drinks orderable online.

## Opening hours and location

Open daily, 9AM – 8PM. Ekrejeta, Abraka, Delta State.
