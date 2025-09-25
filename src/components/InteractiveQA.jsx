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
  Sparkles,
  Clock,
  Target,
  ArrowRight,
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

    if (!isMultiple) {
      setOpenDropdowns((prev) => ({ ...prev, [questionId]: false }));
    }
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setOpenDropdowns({});
    } else {
      setIsComplete(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setOpenDropdowns({});
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

  // Handle navigation clicks (simulated)
  const handleNavClick = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  if (isComplete) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        {/* Success Animation Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              🎉 Your Custom Web Solution is Ready!
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Based on your answers, we've created a personalized roadmap for
              your perfect website
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Your Project Details
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Service Type:</span>
                <span className="font-semibold text-blue-600 capitalize">
                  {answers.serviceType?.replace(/([A-Z])/g, " $1")}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Budget Range:</span>
                <span className="font-semibold text-green-600">
                  {answers.budget === "basic" && "$500 - $1,500"}
                  {answers.budget === "standard" && "$1,500 - $3,500"}
                  {answers.budget === "premium" && "$3,500 - $7,500"}
                  {answers.budget === "enterprise" && "$7,500+"}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Timeline:</span>
                <span className="font-semibold text-orange-600">
                  {answers.timeline === "urgent" && "1-2 weeks"}
                  {answers.timeline === "standard" && "3-4 weeks"}
                  {answers.timeline === "flexible" && "1-2 months"}
                  {answers.timeline === "planning" && "2+ months"}
                </span>
              </div>
              <div className="py-2">
                <span className="text-gray-600 font-medium">
                  Selected Features:
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(answers.features || []).map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {feature.replace(/([A-Z])/g, " $1").toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Recommended Services
              </h3>
            </div>
            <ul className="space-y-4">
              {getRecommendations().map((rec, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🚀 Ready to Turn Your Vision Into Reality?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Let's schedule a free consultation to discuss your project in
              detail and provide you with a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={() => handleNavClick("/contact")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>

              <PopupButton
                url="https://calendly.com/emachi2011/30min"
                rootElement={document.getElementById("root")} // must match your React root
                text="Schedule a free Consultation"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition-colors"
              />
            </div>
          </div>

          <button
            onClick={resetQuiz}
            className="text-blue-600 hover:text-blue-700 px-4 py-2 font-medium transition-colors underline cursor-pointer"
          >
            Start Over with Different Requirements
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Eye-catching Header with Animation */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="relative">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-yellow-500 mr-3 animate-spin" />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-bounce">
              ✨ Free Tool
            </span>
            <Sparkles className="w-8 h-8 text-yellow-500 ml-3 animate-spin" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            🎯 Get Your Perfect Website Quote in 60 Seconds!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Answer 5 quick questions and discover exactly what your dream
            website will cost —
            <span className="font-bold text-blue-600">
              {" "}
              completely free, no email required!
            </span>
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>Takes 1 minute</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>Personalized results</span>
            </div>
            <div className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>100% Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar with Enhanced Styling */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
              {currentStep + 1}
            </span>
            Quick Question #{currentStep + 1}
          </h3>
          <div className="flex items-center text-sm text-gray-600 mt-2 md:mt-0">
            <span className="font-medium">
              Progress: {Math.round(progress)}%
            </span>
            <span className="ml-2">
              ({currentStep + 1} of {questions.length})
            </span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Question Card with Enhanced Styling */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full opacity-50 pointer-events-none"></div>
        <div className="relative">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center">
            <span className="text-3xl mr-3">💭</span>
            {currentQuestion.question}
          </h3>

          <div className="relative">
            {/* Enhanced Dropdown Button */}
            <button
              onClick={() => toggleDropdown(currentQuestion.id)}
              className={`w-full p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between transform hover:scale-[1.02] ${
                isAnswered
                  ? "border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <span
                className={`font-semibold text-lg ${
                  isAnswered ? "text-blue-800" : "text-gray-600"
                }`}
              >
                {getSelectedOptionLabel(
                  currentQuestion.id,
                  currentQuestion.type === "multiple"
                )}
              </span>
              <ChevronDown
                className={`w-6 h-6 transition-all duration-300 ${
                  isDropdownOpen ? "rotate-180 scale-110" : ""
                } ${isAnswered ? "text-blue-600" : "text-gray-400"}`}
              />
            </button>

            {/* Enhanced Dropdown Options */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-3 bg-white border-2 border-blue-100 rounded-xl shadow-2xl z-50 max-h-96 overflow-y-auto">
                {currentQuestion.options.map((option) => {
                  const Icon = option.icon;
                  const isSelected =
                    currentQuestion.type === "multiple"
                      ? (answers[currentQuestion.id] || []).includes(
                          option.value
                        )
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
                      className={`p-6 cursor-pointer transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 border-b border-gray-100 last:border-b-0 transform hover:scale-[1.01] ${
                        isSelected
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        {Icon && (
                          <Icon
                            className={`w-8 h-8 mr-4 ${
                              isSelected ? "text-blue-600" : "text-gray-400"
                            }`}
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-semibold text-lg ${
                                isSelected ? "text-blue-800" : "text-gray-800"
                              }`}
                            >
                              {option.label}
                            </span>
                            {isSelected && (
                              <CheckCircle className="w-6 h-6 text-blue-600 animate-bounce" />
                            )}
                          </div>
                          {option.description && (
                            <p
                              className={`text-sm mt-2 ${
                                isSelected
                                  ? "text-blue-600 font-medium"
                                  : "text-gray-600"
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

          {/* Enhanced Selected Features Display */}
          {currentQuestion.type === "multiple" &&
            answers[currentQuestion.id] &&
            answers[currentQuestion.id].length > 0 && (
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-700 font-semibold mb-3">
                  ✅ Selected features:
                </p>
                <div className="flex flex-wrap gap-2">
                  {answers[currentQuestion.id].map((feature) => {
                    const option = currentQuestion.options.find(
                      (opt) => opt.value === feature
                    );
                    return (
                      <span
                        key={feature}
                        className="px-4 py-2 bg-white border border-blue-200 text-blue-800 text-sm rounded-full flex items-center font-medium shadow-sm"
                      >
                        {option?.label}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAnswer(currentQuestion.id, feature, true);
                          }}
                          className="ml-2 text-blue-600 hover:text-red-600 font-bold text-lg"
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
      </div>

      {/* Enhanced Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all transform ${
            currentStep === 0
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100 hover:scale-105"
          }`}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        <button
          onClick={nextStep}
          disabled={!isAnswered}
          className={`flex items-center px-8 py-4 rounded-xl font-semibold transition-all transform ${
            !isAnswered
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:scale-105"
          }`}
        >
          {currentStep === questions.length - 1 ? (
            <>
              🎉 Get My Quote!
              <Sparkles className="w-5 h-5 ml-2" />
            </>
          ) : (
            <>
              Next Question
              <ChevronRight className="w-5 h-5 ml-2" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InteractiveQA;
