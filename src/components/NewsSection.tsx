import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { getApiUrl } from "../utils/assets";

interface NewsItem {
  id: string;
  title: string;
  content: string;
  published_date: string;
  category: string;
  image_url?: string;
  blog_url?: string;
}

const NewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch(getApiUrl('api/news/manage.php'));
      const result = await response.json();
      if (result.success && result.data) {
        setNewsItems(result.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Research: "bg-[#0D225C]",
      Events: "bg-[#CCB156]",
      Achievement: "bg-green-500",
      Partnership: "bg-blue-500",
      Blog: "bg-purple-600",
    };
    return colors[category] || "bg-[#747488]";
  };

  useEffect(() => {
    if (!isHovered && newsItems.length > 0) {
      const int = setInterval(() => {
        setCurrentIndex((p) => (p + 1) % newsItems.length);
      }, 4000);

      return () => clearInterval(int);
    }
  }, [isHovered, newsItems.length]);

  const nextSlide = () => setCurrentIndex((p) => (p + 1) % newsItems.length);
  const prevSlide = () =>
    setCurrentIndex((p) => (p - 1 + newsItems.length) % newsItems.length);

  if (loading) {
    return (
      <section className="py-20 bg-white text-center">
        <div className="animate-spin h-16 w-16 border-b-2 border-[#0D225C] rounded-full mx-auto" />
      </section>
    );
  }

  if (newsItems.length === 0) {
    return (
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl text-[#0D225C] font-bold">Latest News & Announcements</h2>
        <p className="text-xl text-[#747488] mt-4">
          No news articles available at the moment. Check back soon!
        </p>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D225C]">
            Latest News & Announcements
          </h2>
          <p className="text-xl text-[#747488] mt-4">Stay updated with events and blogs.</p>
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg z-10"
          >
            <ChevronLeft className="text-[#0D225C]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg z-10"
          >
            <ChevronRight className="text-[#0D225C]" />
          </button>

          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 320}px)` }}
            >
              {newsItems.map((item) => (
                <div key={item.id} className="w-80 flex-shrink-0 px-4">
                  <div className="bg-[#F0F0EA] rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-all">
                    <div className="relative">
                      <img
                        src={item.image_url}
                        className="w-full h-48 object-cover"
                        alt={item.title}
                      />
                      <span
                        className={`absolute top-4 left-4 ${getCategoryColor(
                          item.category
                        )} px-3 py-1 rounded-full text-white text-sm`}
                      >
                        {item.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-sm text-[#747488] mb-3">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(item.published_date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "2-digit",
                          year: "numeric",
                        })}</span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0D225C] mb-3">{item.title}</h3>

                      <p className="text-[#747488] mb-4">{item.content}</p>

                      <a
                        href={item.blog_url || 'https://latestnewsandeventspbs.blogspot.com/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#CCB156] font-semibold"
                      >
                        Read More <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate for infinite loop */}
             
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {newsItems.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-[#CCB156]" : "bg-[#747488]/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://latestnewsandeventspbs.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0D225C] text-white px-8 py-3 rounded-lg hover:scale-105 transition-all"
          >
            View All News
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
