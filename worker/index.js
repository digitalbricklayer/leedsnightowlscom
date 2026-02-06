export default {
  async fetch(request, env, ctx) {

    if (request.method === "POST") {
        const sender = "hello@leedsnightowls.com";
        const senderName = "Leeds Night Owls";
        const recipient = "jackhughes409@gmail.com";

        const formData = await request.formData();
//        console.log("Form Data:", Object.fromEntries(formData.entries()));
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

//        await env.SEND_EMAIL.send({
//            to: [{ email: `${recipient}` }],
//            from: { email: `${sender}`, name: `${senderName}` },
//            subject: `Message from ${name}`,
//            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//        });

        return Response.redirect("https://leedsnightowls.com/thankyou/", 302);
    }

    const myBlob = new Blob();
    const notFoundOptions = { status: 404, statusText: "Unable to find the resource." };
    const notFoundResponse = new Response(myBlob, notFoundOptions);    

    return notFoundResponse;
  }
}
