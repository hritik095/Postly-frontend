import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">Contact Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6">
        {" "}
  We’d love to hear from you! Whether you have questions, feedback, or need support, the Postly team is here to help. Feel free to reach out to us through any of the following channels: <br /><br />

📧 <b>Email: </b>support@postly.com <br />
📍 <b>Address: </b> Velocity Business Hub, 12th Floor, Surat, Gujarat 395009 <br />
📞 <b>Phone: </b>  1800-120-200 <br />
<br /><br />
You can also connect with us on social media: <br />
🔹 Twitter: @PostlyApp <br />
🔹 Instagram: @PostlyOfficial <br />
🔹 Facebook: Postly <br />
<br />


Thank you for being a part of Postly—where your voice matters! ✨
      </p>
      <div className="my-6 flex justify-center items-center">
        <img src={assets.contact} alt="" className="w-[55%]"/>
      </div>
    </div>
  );
};
export default Contact;
