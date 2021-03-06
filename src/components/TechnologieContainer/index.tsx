import React from 'react';
import { Reveal } from 'react-genie';

interface IProps {
	title: string;
	subTitle: string;
	technologies: ITechnologie[];
	reveal: string;
}

interface ITechnologie {
	name: string;
	value: number;
}

const TechnologieContainer = ({
	title,
	subTitle,
	technologies,
	reveal,
}: IProps) => {
	return (
		<Reveal
			animation={reveal}
			style={{ margin: 10, width: '100%', maxWidth: '22rem' }}
		>
			<div
				className="card h-100"
				style={{ width: '100%', maxWidth: '22rem' }}
			>
				<div className="card-body">
					<h5 className="card-title font-weight-bolder">{title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>
					<div className="card-text">
						{technologies.map((technologie, index) => (
							<React.Fragment key={index}>
								<p key={index} className="mt-3 mb-1 text-dark">
									{technologie.name}
								</p>

								<div className="progress">
									<div
										className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
										style={{ width: `${technologie.value}%` }}
										role="progressbar"
										aria-valuenow={technologie.value}
										aria-valuemin={0}
										aria-valuemax={100}
									></div>
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</Reveal>
	);
};

export default TechnologieContainer;
