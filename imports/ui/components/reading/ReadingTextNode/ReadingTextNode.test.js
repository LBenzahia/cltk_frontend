
import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// component:
import ReadingTextNode from './ReadingTextNode';

jest.mock('material-ui/internal/Tooltip');

describe('ReadingTextNode', () => {
	it('renders correctly', () => {

		const tree = renderer
			.create(
				<MuiThemeProvider>
					<ReadingTextNode
						text={{
							_id: 'testId',
						}}
						annotations={[]}
						relatedPassages={[]}
					/>
				</MuiThemeProvider>
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
