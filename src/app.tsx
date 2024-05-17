import '~/global.css';

import { type FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'wouter';

export const App: FC = () => (
	<Suspense>
		<Switch>
			<Route path='/' component={lazy(() => import('~/pages/home'))} />
		</Switch>
	</Suspense>
);
