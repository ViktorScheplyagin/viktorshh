export const ContentBlockList = ({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) => (
  <div className="mt-4">
    <h3 className="text-xl mb-2">{heading}:</h3>
    <ul>
      {items.map((item, index) => (
        <li className="my-2" key={index}>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  </div>
);
