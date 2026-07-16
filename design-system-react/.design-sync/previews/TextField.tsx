import { TextField } from "@damontana/design-system-react";

export const Text = () => <TextField type="text" label="Full name" id="name" hideLabel />;

export const Email = () => <TextField type="email" label="Email address" id="email" />;

export const Password = () => (
  <TextField type="password" label="Password" id="password" forgotPasswordHref="#" />
);

export const TextArea = () => <TextField type="textarea" label="Message" id="message" hideLabel />;

export const WithError = () => (
  <TextField
    type="email"
    label="Email address"
    id="email-error"
    error="Please include a valid email address so we can get back to you"
  />
);
