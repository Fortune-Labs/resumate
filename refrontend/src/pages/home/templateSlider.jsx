import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TemplateSlide from "./templateSlide"; // Adjust the path as needed

// const templateSlider = () => {
//   const templates = [
//     { id: 1, name: "Template 1", imageUrl: "template1Image" },
//     { id: 2, name: "Template 2", imageUrl: "template2Image" },
//     // Add more template objects here
//   ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {templates.map((template) => (
        <TemplateSlide key={template.id} template={template} />
      ))}
    </Slider>
  );
};

export default templateSlider; // Use default export

