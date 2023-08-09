import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const BreedRow = ({ row, key }) => {
  const image = `https://cdn2.thedogapi.com/images/${row.reference_image_id}.jpg`;
  return (
    <tr key={key}>
      <td>
        {row.reference_image_id ? (
          <LazyLoadImage src={image} alt={row.name} />
        ) : (
          <div className="warning-msg">Image not avaiable.</div>
        )}
      </td>
      <td>
        {row?.name && (
          <div className="text-info">
            <strong>Name:</strong> {row.name}
          </div>
        )}
        {row?.description && (
          <div className="text-info">
            <strong>Description:</strong> {row.description}
          </div>
        )}
        {row?.height && (
          <div className="text-info">
            <strong>Height:</strong> {row.height.metric} cm
          </div>
        )}
        {row?.weight && (
          <div className="text-info">
            <strong>Weight :</strong> {row.weight.metric} kg
          </div>
        )}
        {row?.life_span && (
          <div className="text-info">
            <strong>Lifespan:</strong> {row.life_span}
          </div>
        )}
        {row?.bred_for && (
          <div className="text-info">
            <strong>Height:</strong> {row.bred_for}
          </div>
        )}
      </td>
    </tr>
  );
};

export default memo(BreedRow);
