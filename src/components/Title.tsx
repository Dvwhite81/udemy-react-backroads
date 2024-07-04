interface TitleProps {
  title: string;
  subTitle: string;
}

const Title = ({ title, subTitle }: TitleProps) => (
  <div className="section-title">
    <h2>
      {title} <span>{subTitle}</span>
    </h2>
  </div>
);

export default Title;
