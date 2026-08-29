'use client';

import { useState, useMemo } from 'react';
import GalleryHero from '@/app/components/gallery/GalleryHero';
import GalleryGrid from '@/app/components/gallery/GalleryGrid';
import GalleryLightbox from '@/app/components/gallery/GalleryLightbox';
import GalleryVideoSection from '@/app/components/gallery/GalleryVideoSection';
import GalleryAlbums from '@/app/components/gallery/GalleryAlbums';
import GalleryCTA from '@/app/components/gallery/GalleryCTA';
import { galleryPhotos } from '@/app/components/gallery/galleryData';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('সকল মুহূর্ত');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Dynamic filter for search & category
  const filteredPhotos = useMemo(() => {
    return galleryPhotos.filter((photo) => {
      const matchCategory =
        activeCategory === 'সকল মুহূর্ত' || photo.category === activeCategory;

      const matchSearch =
        !searchQuery.trim() ||
        photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        photo.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSelectAlbumCategory = (cat: string) => {
    setActiveCategory(cat);
    // Smooth scroll to grid section
    const gridEl = document.getElementById('gallery-grid');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* 1. Hero with Breadcrumb & Instant Search */}
      <GalleryHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={filteredPhotos.length}
      />

      {/* 2. Interactive Category Filter Tabs & Modern Bento Grid */}
      <div id="gallery-grid">
        <GalleryGrid
          photos={filteredPhotos}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onSelectPhoto={(idx) => setSelectedPhotoIndex(idx)}
        />
      </div>

      {/* 3. Fullscreen Lightbox Modal with Keyboard Navigation */}
      <GalleryLightbox
        photos={filteredPhotos}
        selectedIndex={selectedPhotoIndex}
        onClose={() => setSelectedPhotoIndex(null)}
        onSelectIndex={setSelectedPhotoIndex}
      />

      {/* 4. Special Yearly Photo Albums & Memory Archives */}
      <GalleryAlbums onSelectCategory={handleSelectAlbumCategory} />

      {/* 5. High Quality Video Highlights & Documentary Section */}
      <GalleryVideoSection />

      {/* 6. Social Media & Media Wing Call to Action */}
      <GalleryCTA />
    </main>
  );
}
