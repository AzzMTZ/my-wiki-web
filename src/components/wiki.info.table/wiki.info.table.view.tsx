import React from "react";
import { Topic } from "../../schemas/topics";
import "./wiki.info.table.scss";

const WikiInfoTableView: React.FC<{ homeTopic: Topic | null }> = ({ homeTopic }) =>
	homeTopic && (
		<div className="table-container">
			<h1>Wiki Additional Info:</h1>
			<table>
				<thead>
					<tr>
						<th>Security</th>
						<th>Password</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{homeTopic.editable ? "Public" : "Protected"}</td>
						<td>{homeTopic.password}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);

export default WikiInfoTableView;
