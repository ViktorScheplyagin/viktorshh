const Skill = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h2 className="text-xl mb-2">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Skill;
