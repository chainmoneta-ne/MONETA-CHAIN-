const fs = require('fs');
let content = fs.readFileSync('src/components/NewsletterSignup.tsx', 'utf8');

content = content.replace("This email is already subscribed!", "You're already subscribed.");
content = content.replace("Successfully joined the Moneta Chain newsletter!", "You're subscribed to MONETA CHAIN updates.");
content = content.replace("placeholder=\"Enter email address\"", "placeholder=\"name@example.com\"");
content = content.replace("email: email.trim()", "email: email.trim().toLowerCase()");

fs.writeFileSync('src/components/NewsletterSignup.tsx', content);
