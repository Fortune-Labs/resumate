
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const templateSlide = ({ template }) => {
  return (

      <Link to={`/templates/${template.id}`} className="template-slide">
    <div className="text-center">
      <img src={template.imageUrl} alt={template.name} className="w-full" />
      <div className="mt-4 p-1">
        <Button className="p-2 w-40" color="blue" ripple="light" size="lg">
          {template.name}
        </Button>
      </div>
    </div>
      </Link>
  );
};

templateSlide.propTypes = {
  template: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default templateSlide;