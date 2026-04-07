import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "react-router"

const About = () => {
  return (
    <>
      <Navbar />

      <main className="px-20 mt-30 flex flex-col gap-24">

        {/* Hero Section */}
        <section className="text-center flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-darkblack">
            About <span className="text-primary">RiceCare AI</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            RiceCare AI is an intelligent agricultural platform designed to help
            farmers detect rice leaf diseases instantly using artificial
            intelligence and computer vision technology.
          </p>
        </section>

        {/* Mission Section */}
        <section className="flex items-center gap-16">
          <div className="flex-1">
            <img
              className="rounded-3xl shadow-xl"
              src="https://i.pinimg.com/1200x/66/ba/f3/66baf3cb46a2cc20fc85d1980c58a38f.jpg"
              alt="rice field"
            />
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-darkblack">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our mission is to empower farmers with AI-driven tools that can
              identify crop diseases early, reduce crop loss, and increase
              agricultural productivity. By combining machine learning with
              agricultural expertise, RiceCare AI provides accurate disease
              detection and treatment suggestions within seconds.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We believe technology can transform farming and help build a more
              sustainable and productive future for agriculture.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="flex flex-col gap-12 text-center">

          <h2 className="text-4xl font-bold text-darkblack">
            What Makes RiceCare AI Powerful
          </h2>

          <div className="grid grid-cols-3 gap-10">

            <div className="p-8 shadow-lg rounded-xl flex flex-col gap-4">
              <h3 className="text-xl font-bold text-primary">
                AI Disease Detection
              </h3>
              <p className="text-gray-600 text-sm">
                Our advanced deep learning model analyzes rice leaf images and
                detects diseases like Brown Spot, Leaf Blast, and Bacterial
                Blight with high accuracy.
              </p>
            </div>

            <div className="p-8 shadow-lg rounded-xl flex flex-col gap-4">
              <h3 className="text-xl font-bold text-primary">
                Instant Diagnosis
              </h3>
              <p className="text-gray-600 text-sm">
                Farmers receive instant results within seconds after uploading
                a rice leaf image, helping them take action quickly.
              </p>
            </div>

            <div className="p-8 shadow-lg rounded-xl flex flex-col gap-4">
              <h3 className="text-xl font-bold text-primary">
                Treatment Suggestions
              </h3>
              <p className="text-gray-600 text-sm">
                RiceCare AI not only detects diseases but also provides
                recommended treatments and preventive solutions.
              </p>
            </div>

          </div>
        </section>

        {/* Technology Section */}
        <section className="bg-light rounded-3xl p-16 flex flex-col gap-6 text-center">

          <h2 className="text-4xl font-bold text-darkblack">
            Technology Behind RiceCare AI
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform is powered by deep learning and computer vision models
            trained on thousands of rice leaf images. Using modern frameworks
            like TensorFlow and EfficientNet, RiceCare AI can identify disease
            patterns with remarkable accuracy.
          </p>

          <p className="text-gray-600 max-w-3xl mx-auto">
            The system is built using a scalable MERN stack frontend combined
            with a Python-based machine learning backend to deliver fast and
            reliable predictions.
          </p>

        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white rounded-3xl p-16 text-center flex flex-col gap-6">

          <h2 className="text-4xl font-bold">
            Start Detecting Rice Leaf Diseases Today
          </h2>

          <p className="opacity-90">
            Upload a rice leaf image and get instant AI-powered disease
            diagnosis to protect your crops and increase yield.
          </p>

          <div>
            <Link to="/detect">
            <button className="bg-white cursor-pointer text-primary px-8 py-3 rounded-xl font-semibold">
              Detect Disease
            </button>
            </Link>
          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default About;