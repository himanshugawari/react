import React from 'react';
import './App.css';

// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css';
// import styles from './appStyles.module.css';
// import Form from './components/Form';
// import LifecycleA from './components/Mounting-LifecycleA';
// import LifecycleAUpdate from './components/LifecycleAUpdate';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import ParentComp from './components/ParentComp';
// import ParentMemoComp from './components/ParentMemoComp';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Superman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary>
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentMemoComp /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleAUpdate /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name='Clark' heroName='Siperman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman' />
      <Welcome name='Bruce' heroName='Batman'>
        <p>This is children props</p>
      </Welcome>
      <Welcome name='Clark' heroName='Siperman'>
        <button>Action</button>
      </Welcome>
      <Welcome name='Diana' heroName='Wonder Woman' /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
