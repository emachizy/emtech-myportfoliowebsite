import { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Globe,
  Smartphone,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  ChevronDown,
} from "lucide-react";
import { PopupButton } from "react-calendly";
import { Link } from "react-router-dom";

const InteractiveQA = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isComplete, setIsComplete] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const questions = [
    {
      id: "serviceType",
      question: "What type of website do you need?",
      type: "single",
      options: [
        {
          value: "business",
          label: "Business Website",
          icon: Globe,
          description: "Professional presence for your company",
        },
        {
          value: "ecommerce",
          label: "E-commerce Store",
          icon: ShoppingCart,
          description: "Online store to sell products",
        },
        {
          value: "portfolio",
          label: "Portfolio Site",
          icon: Users,
          description: "Showcase your work and skills",
        },
        {
          value: "blog",
          label: "Blog/Content Site",
          icon: Zap,
          description: "Share content and engage audience",
        },
      ],
    },
    {
      id: "features",
      question: "Which features are important for your website?",
      type: "multiple",
      options: [
        {
          value: "responsive",
          label: "Mobile Responsive Design",
          icon: Smartphone,
        },
        { value: "seo", label: "SEO Optimization", icon: Globe },
        { value: "cms", label: "Content Management System", icon: Zap },
        { value: "analytics", label: "Analytics Integration", icon: Users },
        { value: "security", label: "Security Features", icon: Shield },
        { value: "performance", label: "Performance Optimization", icon: Zap },
      ],
    },
    {
      id: "budget",
      question: "What's your approximate budget range?",
      type: "single",
      options: [
        {
          value: "basic",
          label: "$500 - $1,500",
          description: "Basic website with essential features",
        },
        {
          value: "standard",
          label: "$1,500 - $3,500",
          description: "Professional site with advanced features",
        },
        {
          value: "premium",
          label: "$3,500 - $7,500",
          description: "Custom solution with premium features",
        },
        {
          value: "enterprise",
          label: "$7,500+",
          description: "Enterprise-level custom development",
        },
      ],
    },
    {
      id: "timeline",
      question: "When do you need your website completed?",
      type: "single",
      options: [
        {
          value: "urgent",
          label: "1-2 weeks",
          description: "Rush project with premium pricing",
        },
        {
          value: "standard",
          label: "3-4 weeks",
          description: "Standard development timeline",
        },
        {
          value: "flexible",
          label: "1-2 months",
          description: "Flexible timeline for best results",
        },
        {
          value: "planning",
          label: "2+ months",
          description: "Still in planning phase",
        },
      ],
    },
    {
      id: "support",
      question: "What level of ongoing support do you need?",
      type: "single",
      options: [
        {
          value: "basic",
          label: "Basic Maintenance",
          description: "Security updates and backups",
        },
        {
          value: "standard",
          label: "Standard Support",
          description: "Maintenance + content updates",
        },
        {
          value: "premium",
          label: "Premium Support",
          description: "Full support + monthly improvements",
        },
        {
          value: "none",
          label: "No Ongoing Support",
          description: "One-time delivery only",
        },
      ],
    },
  ];

  const toggleDropdown = (questionId) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleAnswer = (questionId, value, isMultiple = false) => {
    setAnswers((prev) => {
      if (isMultiple) {
        const currentAnswers = prev[questionId] || [];
        const newAnswers = currentAnswers.includes(value)
          ? currentAnswers.filter((v) => v !== value)
          : [...currentAnswers, value];
        return { ...prev, [questionId]: newAnswers };
      }
      return { ...prev, [questionId]: value };
    });

    // Close dropdown for single select after selection
    if (!isMultiple) {
      setOpenDropdowns((prev) => ({ ...prev, [questionId]: false }));
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setOpenDropdowns({}); // Close all dropdowns when moving to next step
    } else {
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setOpenDropdowns({}); // Close all dropdowns when moving to previous step
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
    setOpenDropdowns({});
  };

  const getRecommendations = () => {
    const serviceType = answers.serviceType;
    const budget = answers.budget;
    const features = answers.features || [];

    let recommendations = [];

    if (serviceType === "ecommerce") {
      recommendations.push(
        "E-commerce platform integration (Shopify, WooCommerce)"
      );
      recommendations.push("Payment gateway setup");
      recommendations.push("Inventory management system");
    }

    if (features.includes("seo")) {
      recommendations.push("SEO-optimized structure and meta tags");
      recommendations.push("Google Analytics and Search Console setup");
    }

    if (features.includes("cms")) {
      recommendations.push("User-friendly content management system");
      recommendations.push("Training and documentation");
    }

    if (budget === "premium" || budget === "enterprise") {
      recommendations.push("Custom design and branding");
      recommendations.push("Advanced animations and interactions");
      recommendations.push("Third-party integrations");
    }

    return recommendations;
  };

  const getSelectedOptionLabel = (questionId, isMultiple) => {
    const currentQuestion = questions.find((q) => q.id === questionId);
    const selectedValue = answers[questionId];

    if (!selectedValue) return "Select an option...";

    if (isMultiple) {
      const selectedCount = selectedValue.length;
      if (selectedCount === 0) return "Select features...";
      if (selectedCount === 1) {
        const option = currentQuestion.options.find(
          (opt) => opt.value === selectedValue[0]
        );
        return option?.label || "1 selected";
      }
      return `${selectedCount} features selected`;
    }

    const option = currentQuestion.options.find(
      (opt) => opt.value === selectedValue
    );
    return option?.label || "Select an option...";
  };

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentQuestion?.id];
  const progress = ((currentStep + 1) / questions.length) * 100;
  const isDropdownOpen = openDropdowns[currentQuestion?.id];

  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Perfect! Here's Your Custom Recommendation
          </h2>
          <p className="text-gray-600">
            Based on your answers, here's what we recommend for your project:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Your Requirements
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Service Type:</span>
                <span className="font-medium capitalize">
                  {answers.serviceType?.replace(/([A-Z])/g, " $1")}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Budget Range:</span>
                <span className="font-medium">
                  {answers.budget === "basic" && "$500 - $1,500"}
                  {answers.budget === "standard" && "$1,500 - $3,500"}
                  {answers.budget === "premium" && "$3,500 - $7,500"}
                  {answers.budget === "enterprise" && "$7,500+"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Timeline:</span>
                <span className="font-medium">
                  {answers.timeline === "urgent" && "1-2 weeks"}
                  {answers.timeline === "standard" && "3-4 weeks"}
                  {answers.timeline === "flexible" && "1-2 months"}
                  {answers.timeline === "planning" && "2+ months"}
                </span>
              </div>
              <div>
                <span className="text-gray-600">Selected Features:</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {(answers.features || []).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {feature.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Recommended Services
            </h3>
            <ul className="space-y-3">
              {getRecommendations().map((rec, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700 mb-6">
            Ready to bring your vision to life? Let's discuss your project in
            detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>

            <PopupButton
              url="https://calendly.com/emachi2011/30min"
              rootElement={document.getElementById("root")} // must match your React root
              text="Schedule Consultation"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
            />

            <button
              onClick={resetQuiz}
              className="text-blue-600 hover:text-blue-700 px-4 py-3 font-semibold transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Find Your Perfect Web Solution
          </h2>
          <span className="text-sm text-gray-600">
            Step {currentStep + 1} of {questions.length}
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          {currentQuestion.question}
        </h3>

        <div className="relative">
          {/* Dropdown Button */}
          <button
            onClick={() => toggleDropdown(currentQuestion.id)}
            className={`w-full p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 flex items-center justify-between ${
              isAnswered
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <span
              className={`font-medium ${
                isAnswered ? "text-blue-800" : "text-gray-600"
              }`}
            >
              {getSelectedOptionLabel(
                currentQuestion.id,
                currentQuestion.type === "multiple"
              )}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              } ${isAnswered ? "text-blue-600" : "text-gray-400"}`}
            />
          </button>

          {/* Dropdown Options */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow- z-10 max-h-80 overflow-y-auto">
              {currentQuestion.options.map((option) => {
                const Icon = option.icon;
                const isSelected =
                  currentQuestion.type === "multiple"
                    ? (answers[currentQuestion.id] || []).includes(option.value)
                    : answers[currentQuestion.id] === option.value;

                return (
                  <div
                    key={option.value}
                    onClick={() =>
                      handleAnswer(
                        currentQuestion.id,
                        option.value,
                        currentQuestion.type === "multiple"
                      )
                    }
                    className={`p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                      isSelected ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-center">
                      {Icon && (
                        <Icon
                          className={`w-6 h-6 mr-4 ${
                            isSelected ? "text-blue-600" : "text-gray-400"
                          }`}
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-medium ${
                              isSelected ? "text-blue-800" : "text-gray-800"
                            }`}
                          >
                            {option.label}
                          </span>
                          {isSelected && (
                            <CheckCircle className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        {option.description && (
                          <p
                            className={`text-sm mt-1 ${
                              isSelected ? "text-blue-600" : "text-gray-600"
                            }`}
                          >
                            {option.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Show selected features for multiple select */}
        {currentQuestion.type === "multiple" &&
          answers[currentQuestion.id] &&
          answers[currentQuestion.id].length > 0 && (
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Selected features:</p>
              <div className="flex flex-wrap gap-2">
                {answers[currentQuestion.id].map((feature) => {
                  const option = currentQuestion.options.find(
                    (opt) => opt.value === feature
                  );
                  return (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full flex items-center"
                    >
                      {option?.label}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnswer(currentQuestion.id, feature, true);
                        }}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
            currentStep === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={!isAnswered}
          className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
            !isAnswered
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {currentStep === questions.length - 1
            ? "Get Recommendations"
            : "Next"}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default InteractiveQA;
