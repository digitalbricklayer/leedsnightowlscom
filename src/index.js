export default {
  async fetch(request, env, ctx) {

    if (request.method === "POST") {
        const sender = "hello@leedsnightowls.com";
        const senderName = "Leeds Night Owls";
        const recipient = "jackhughes409@gmail.com";

        await env.SEND_EMAIL.send({
            to: [{ email: recipient }],
            from: { email: sender, name: senderName },
            subject: "Hello World",
            text: "Hello World!"
        });

        return new Response(`Successfully sent email!`);    
    }

    return new Response("Send a POST request to send an email.");
  }
}
