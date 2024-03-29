import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Courses, Course, Students } from './components';

const MainRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/courses/:id' component={Course} />
            <Route exact path='/Students' component={Students} />
        </Switch>
    );
}

export default MainRouter;