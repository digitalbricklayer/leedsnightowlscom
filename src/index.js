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

        return Response.redirect("https://leedsnightowls.com/thankyou/", 302);
    }

    const myBlob = new Blob();
    const notFoundOptions = { status: 404, statusText: "Unable to find the resource." };
    const notFoundResponse = new Response(myBlob, notFoundOptions);    

    return notFoundResponse;
  }
}
