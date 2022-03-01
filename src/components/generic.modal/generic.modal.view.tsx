import "./generic.modal.scss";

const GenericModalView: React.FC<{ title?: string; onClose: () => any }> = ({ children, title, onClose }) => (
	<div className="modal-background">
		<div className="modal">
			<div className="modal-header">
				<div onClick={onClose} className="modal-close">
					&#10006;
				</div>
				<h1>{title ?? "Generic Modal"}</h1>
			</div>
			<div className="modal-body">{children}</div>
		</div>
	</div>
);

export default GenericModalView;
