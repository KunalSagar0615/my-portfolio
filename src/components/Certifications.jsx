import genAI from "../assets/all-certifiates/GenerativeAI.jpg";
import be10x from "../assets/all-certifiates/be10x.jpeg";
import javaExplorer from "../assets/all-certifiates/Java explorer.png";
import jsBootcamp from "../assets/all-certifiates/js.png";
import techrelCertificate from "../assets/certificates/techrel.jpg";

const certifications = [
  {
    title: "Oracle Certified Professional",
    issuer: "Oracle University",
    date: "October 29, 2025",
    description:
      "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.",
    image: genAI,
    credentialLink:
      "https://drive.google.com/file/d/1gLT_1CX5fPAwMeo5rAtP7HE2p7Mkm0qf/view?usp=sharing",
  },
  {
    title: "AI Tools Workshop",
    issuer: "be10x",
    date: "August 31, 2025",
    description:
      "Completed workshop on AI tools and ChatGPT — learned to create presentations, analyze data, and debug code using AI.",
    image: be10x,
    credentialLink:
      "https://drive.google.com/file/d/1AkTVAfQzKPSR0McB_1sGDb9_ThicYlkP/view?usp=sharing",
  },
  {
    title: "Oracle Learning Explorer: Java",
    issuer: "Oracle University",
    date: "2024",
    description:
      "Recognized as an Oracle Learning Explorer for foundational Java learning achievements.",
    image: javaExplorer,
    credentialLink:
      "https://drive.google.com/file/d/1dyO5YtY2I03KbbhgYIuEkCrmrsyZGeb_/view?usp=sharing",
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "LetsUpgrade",
    date: "September 25, 2025",
    description:
      "Successfully completed a 3-day JavaScript Bootcamp organized by LetsUpgrade in collaboration with NSDC, ITM Edutech, and GDG MAD.",
    image: jsBootcamp,
    credentialLink:
      "https://drive.google.com/file/d/1JTh0N4uPSYZtRyNcFzSSXDwYccpXxanD/view?usp=sharing",
  },
  {
  title: "Full Stack Java Developer",
  issuer: "TechRel Technologies Pvt. Ltd.",
  date: "December 10, 2025",
  description:
    "Successfully completed the Full Stack Java Developer program at TechRel Institute, gaining hands-on experience in Core Java, Advanced Java, Spring Boot, REST APIs, databases, and full stack application development.",
  image: techrelCertificate,
  credentialLink: "https://drive.google.com/file/d/1TZU-4e6gU3S5c3KSAbAXRKQl5DKLj9Bu/view?usp=drivesdk"
}

];

const Certifications = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">Certifications</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-4 hover:scale-105 transition-transform border border-gray-700" >
            <img src={cert.image} alt={cert.title} className="rounded-lg mb-4 h-48 w-full object-cover" />
            <h3 className="text-lg font-semibold text-blue-400 mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer}</p>
            <p className="text-gray-500 text-sm mb-2">{cert.date}</p>
            <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
            <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline" >
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
