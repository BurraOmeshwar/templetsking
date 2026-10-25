import React, { useState } from 'react';

// Unsplash high quality design & poster image collections for infinite variety
const imagePool = [
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&auto=format&fit=crop&q=60"
];

const creatorsList = ["Anrav Studio", "Design Monk", "Festive Creators", "Studio Masala", "Pixel Mint", "Career Craft", "Pitch Deck Pro", "Paper Gulab", "DesignFlow", "ExecPro", "ColorSplash"];

const categoriesList = ["Social Media", "Festivals", "Business", "UI/UX", "Resume", "Presentations", "Invitations"];

// Automatically generate thousands of professional templates for massive marketplace feel
const generateMassiveTemplates = (count: number) => {
  const generated = [];
  for (let i = 1; i <= count; i++) {
    const category = categoriesList[i % categoriesList.length];
    const creator = creatorsList[i % creatorsList.length];
    const image = imagePool[i % imagePool.length];
    generated.push({
      id: i.toString(),
      title: `${category} Master Design #${i}`,
      category: category,
      image: image,
      creator: creator,
      description: `High-quality professionally curated ${category.toLowerCase()} template built for modern creators and enterprise brands.`
    });
  }
  return generated;
};

// Loading 10,000+ templates instantly
const allTemplates = generateMassiveTemplates(10000);

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTemplate, setActiveTemplate] = useState<any>(null);

  const categories = ["All", ...categoriesList];

  const filteredTemplates = allTemplates.filter(template => {
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          template.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.creator.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b border-gray-100 py-4 px-8 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveTemplate(null)}>
          <span className="bg-purple-600 text-white p-1.5 rounded-lg font-bold">✦</span>
          <span className="text-xl font-bold tracking-tight">TempletsKing</span>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-purple-600">Explore</a>
          <a href="#" className="hover:text-purple-600">Categories</a>
          <a href="#" className="hover:text-purple-600">Free Templates</a>
          <a href="#" className="hover:text-purple-600">Creators</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Upload</button>
          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">Log in</button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all">Sign up</button>
        </div>
      </header>

      {/* Detail View Modal / Page */}
      {activeTemplate ? (
        <main className="max-w-5xl mx-auto px-6 py-12">
          <button 
            onClick={() => setActiveTemplate(null)}
            className="mb-8 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2.5 rounded-xl transition-all flex items-center space-x-2"
          >
            <span>← Back to Explore</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 border border-gray-100 p-8 rounded-3xl shadow-sm">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden shadow-md">
              <img src={activeTemplate.image} alt={activeTemplate.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeTemplate.category}
                </span>
                <h1 className="text-3xl font-extrabold text-gray-900 mt-3 mb-2">{activeTemplate.title}</h1>
                <p className="text-sm text-gray-500 mb-6">Curated by <span className="font-semibold text-gray-800">{activeTemplate.creator}</span></p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{activeTemplate.description}</p>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={() => alert(`Opening Figma design for ${activeTemplate.title}...`)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-6 rounded-2xl shadow-md transition-all text-center"
                >
                  View in Figma 🚀
                </button>
                <button className="bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 font-semibold py-3.5 px-5 rounded-2xl transition-all">
                  ♡ Save
                </button>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <>
          {/* Hero Section */}
          <section className="text-center py-16 px-4 bg-gradient-to-b from-purple-50/50 to-white">
            <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              ✦ OVER 10,000+ CURATED DESIGNS & POSTERS
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
              Find your next<br />great design.
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto mb-8 text-base">
              Explore massive collections of ready-to-use templates made for creators, businesses, and every big idea.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search across 10,000+ templates, posters, ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-4 py-3.5 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-sm"
              />
            </div>
          </section>

          {/* Discover Section & Categories */}
          <main className="max-w-7xl mx-auto px-6 py-10">
            {/* Category Pills */}
            <div className="flex justify-center space-x-3 overflow-x-auto pb-8 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Pinterest Style Clean Grid with Infinite Templates */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance] space-y-6">
              {filteredTemplates.length > 0 ? (
                filteredTemplates.map((template) => (
                  <div 
                    key={template.id} 
                    onClick={() => setActiveTemplate(template)}
                    className="break-inside-avoid group relative rounded-3xl overflow-hidden cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all"
                  >
                    <img 
                      src={template.image} 
                      alt={template.title} 
                      loading="lazy"
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 text-white">
                      <div className="flex justify-end">
                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium">
                          {template.category}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{template.title}</h3>
                        <p className="text-xs text-gray-300">by {template.creator}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-16 text-gray-500">
                  No templates found matching your search. Try another category!
                </div>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
}