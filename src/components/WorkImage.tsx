interface Props {
  image: string;
  alt?: string;
  video?: string;
}

const WorkImage = (props: Props) => {
  return (
    <div className="work-image">
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default WorkImage;
