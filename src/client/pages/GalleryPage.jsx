"use client";
import { ApiCaller } from "@/ApiManager/apiCaller";
import { useEffect, useState } from "react";
import CategoryBox from "@/admin/components/CategoryBox";
import Gallery from "@/commons/Gallery";
import { TfiGallery } from "react-icons/tfi";
import Buffer from "../components/LoadingState/Buffer";
const GalleryPage = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    ApiCaller.getAllGalleryMedia()
      .then((data) => {
        console.log(data);
        setCategories(data);
        setLoading(false);
      })
      .then(() => {
        setCurrentCategoryIndex(0);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Buffer />;
  }

  return (
    <div>
      <div className="mt-8 flex flex-col items-center mb-8">
        <p className="text-center text-2xl mt-4 mb-4 md:text-3xl flex items-center justify-center">
          Gallery
          <TfiGallery className="ml-2" />
        </p>
        <hr className="border-black w-full max-w-[40%] mx-auto border-t-2" />
      </div>

      <div className="my-10 p-4 w-full flex gap-4 flex-wrap items-center justify-center">
        {categories.map((category, i) => (
          <CategoryBox
            index={i}
            key={i}
            name={category.name}
            currentCategoryIndex={currentCategoryIndex}
            categories={category.imageUrls}
            setter={setCurrentCategoryIndex}
          />
        ))}
      </div>
      {categories &&
      currentCategoryIndex !== null &&
      categories[currentCategoryIndex] ? (
        <div className="my-10  w-full mx-auto">
          <Gallery
            className=" mx-auto flex items-center justify-center p-4"
            imageUrlsArray={categories[currentCategoryIndex].imageUrls}
            videoUrlsArray={categories[currentCategoryIndex].videoUrls}
          />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPage;
