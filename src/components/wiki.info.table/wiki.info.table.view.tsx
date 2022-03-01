import React from "react";
import { Topic } from "../../schemas/topics";
import "./wiki.info.table.scss";

const WikiInfoTableView: React.FC<{ homeTopic: Topic | null; topicsCount: number }> = ({ homeTopic, topicsCount }) =>
	homeTopic && (
		<div className="table-container">
			<h2>Wiki Additional Info:</h2>
			<table>
				<thead>
					<tr>
						<th>Security</th>
						<th>Password</th>
						<th>Topics Count</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{homeTopic.editable ? "Public" : "Protected"}</td>
						<td>{homeTopic.password}</td>
						<td>{topicsCount}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

export default WikiInfoTableView;
