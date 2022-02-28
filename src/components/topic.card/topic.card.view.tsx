import "./topic.card.scss";
import noImage from "../../assets/images/no_image.jpg";
import { Topic } from "../../schemas/topics";

const TopicCardView: React.FC<{ topicData: Topic; topicImage: string }> = ({ topicData, topicImage }) => (
	<div className="card">
		<img src={topicImage ?? noImage} alt="empty"></img>
		<div>
			<h3>{topicData.name}</h3>
			<p>{topicData.birth}</p>
			<p>{topicData.type}</p>
		</div>
	</div>
);

export default TopicCardView;
