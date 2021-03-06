import "./topic.card.scss";
import { Topic } from "../../schemas/topics";

const TopicCardView: React.FC<{ topicData: Topic; topicImage: string }> = ({ topicData, topicImage }) => (
	<div className="card">
		<div className="topic-image">
			<img src={topicImage} alt="topic" />
		</div>
		<div className="topic-data">
			<h3>{topicData.name}</h3>
			{topicData.birth && <p>{topicData.birth}</p>}
			{topicData.type && <p>{topicData.type}</p>}
		</div>
	</div>
);

export default TopicCardView;
