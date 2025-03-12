import { Issue } from "@/store/issuesSlice";
import { useDraggable } from "@dnd-kit/core";

interface IssueCardProps {
  issue: Issue;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: issue.id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    padding: "5px",
    margin: "5px",
    backgroundColor: "white",
    borderRadius: "4px",
    border: "2px solid black",
    cursor: "grab",
    transition: "background-color 0.2s, box-shadow 0.2s",
    boxShadow: "none",
  };

  const hoverStyle = {
    backgroundColor: "rgb(236, 236, 236)",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, style)}
    >
      <p>{issue.title}</p>
    </div>
  );
};

export default IssueCard;
