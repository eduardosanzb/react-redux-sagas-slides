import React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  ComponentPlayground,
  Markdown,
  Image,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import oldCode from './oldCode';
import reactExample from './reactExample';
import reactExample1 from './reactExample.1';
import contextExample from './contextExample';
import contextExample1 from './contextExample.1';
import contextExample2 from './contextExample.2';
import contextExample3 from './contextExample.3';

// Require CSS
require('normalize.css');

const images = {
  kat: require('./kat.png'),
  example: require('./containerOrComponent.png'),
  react0: require('./react0.png'),
  react1: require('./react1.png'),
  redux0: require('./redux0.png'),
  redux1: require('./redux1.png'),
  saga: require('./saga.png')
};

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#7c3d85',
    tertiary: 'black',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React? Sagas? Redux?
          </Heading>
          <Text size={3} textColor="tertiary">
            What the heck!?
          </Text>
        </Slide>
        <Slide>
          <Heading caps>Agenda</Heading>
          <List>
            <ListItem>Crash course react/redux/sagas 💥🚙</ListItem>
            <ListItem>React Context API && fancy stuff 🙀</ListItem>
            <ListItem>Tasty treat! 🎂 😊</ListItem>
          </List>
        </Slide>

        {/* CRASH COURSE */}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            What's React?
          </Heading>
        </Slide>

        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}>
          A NEW JavaScript library for building user interfaces based in
          components
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}>
          <Image src={images.kat.replace('/', '')} margin="0px auto 40px" />
          <Heading size={2} caps fit textColor="secondary" textFont="primary">
            Wait what?
          </Heading>
        </Slide>

        <Slide>
          <Heading size={2} caps fit textColor="tertiary">
            How's the old style?
          </Heading>
          <CodePane
            lang="html"
            source={oldCode}
            theme="light"
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary">
          <Heading size={6} caps fit textColor="tertiary">
            How does it works? Components
          </Heading>
          <Image src={images.example.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary">
          <ComponentPlayground code={reactExample} theme="light" />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary">
          <Heading size={2} caps fit textColor="tertiary">
            Why do we need this way of do it?
          </Heading>
          <List>
            <ListItem>Apps are way to complex nowadays</ListItem>
            <ListItem>Enables scalable applications</ListItem>
            <ListItem>Faster performance</ListItem>
            <ListItem>Is hipster and keeps engineers busy 😹</ListItem>
          </List>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}>
          <Heading size={2} caps fit textColor="secondary" textFont="primary">
            How does react works?
          </Heading>
          <Image src={images.react1.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}>
          <Heading size={2} caps fit textColor="secondary" textFont="primary">
            In other perspective
          </Heading>
          <Image src={images.react0.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary">
          <Heading size={6} textColor="tertiary">
            Can we connect them?
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary">
              🤔
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="black">
          <Appear>
            <Heading size={1} textColor="white">
              YES
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} textColor="white">
              WE
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} textColor="white">
              CAN
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Image src={images.example.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary">
          <ComponentPlayground code={reactExample1} theme="light" />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}>
          <Heading size={3} textColor="secondary">
            Or
          </Heading>
          <Image src={images.redux0.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide transitionOut={['slide', 'fade']}>
          <Heading size={6} caps fit textColor="secondary">
            Here we also have a cycle!! 💪
          </Heading>
          <Image
            src={images.redux1.replace('/', '')}
            style={{ maxHeight: '25em' }}
          />
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            And what about those "Sagas"???
          </Heading>
          <Appear>
            <Image
              src={images.saga.replace('/', '')}
              style={{ maxHeight: '25em' }}
            />
          </Appear>
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}
          bgColor="primary">
          <Heading size={2} caps fit textColor="tertiary">
            And why?
          </Heading>
          <List>
            <Appear>
              <ListItem>Enables more complex concurrent models</ListItem>
            </Appear>
            <Appear>
              <ListItem>Improves the performance reducing re-renders</ListItem>
            </Appear>
            <Appear>
              <ListItem>Enables more declarative codebase</ListItem>
            </Appear>
          </List>
        </Slide>

        {/* CONTEXT API */}
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit textColor="secondary">
            React Context API
          </Heading>
          <Heading caps fit textColor="tertiary">
            && othersss fancyIsh stuff 🙀
          </Heading>
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            What's this?
          </Heading>
          <Markdown>
            {`
Is an ~~experimental~~ API for the react components
            `}
          </Markdown>
          That actually it had been there since a long time as the last
          parameter of the component-life-cycle methods. Now official part of
          the React 16.3.0!
          <CodePane
            lang="jsx"
            source={`constructor(props, context)
componentWillReceiveProps(nextProps, nextContext)
shouldComponentUpdate(nextProps, nextState, nextContext)
componentWillUpdate(nextProps, nextState, nextContext)
`}
            theme="light"
            margin="20px auto"
            overflow="overflow"
          />
          <Appear>
            <Text bold>Actually! This what Redux and React-Router use!!</Text>
          </Appear>
        </Slide>
        <Slide bgColor="black">
          <Image src="https://media1.tenor.com/images/4367507df6301eb1fc094734d0452348/tenor.gif?itemid=3539362" />
        </Slide>

        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Text size={4} textColor="secondary">
            But how does this works?
          </Text>
          <Appear>
            <CodePane
              lang="jsx"
              source={contextExample}
              theme="light"
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
            <CodePane
              lang="jsx"
              source={contextExample1}
              theme="light"
              margin="20px auto"
              overflow="overflow"
            />
          </Appear>
          <Appear>
          <Text  size={6} textColor="tertiary">
            You may noticed that {'<Consumer/>'} is returning a render function
          </Text>
          </Appear>
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Text size={4} textColor="secondary">
            Now, we can wrap our components with the state provider
          </Text>
          <CodePane
            lang="jsx"
            source={contextExample2}
            theme="light"
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Text size={4} textColor="secondary">
            And our whole application could look like
          </Text>
          <CodePane
            lang="jsx"
            source={contextExample3}
            theme="light"
            margin="20px auto"
            overflow="overflow"
          />
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading size={2} caps fit textColor="tertiary">
            What's next?
          </Heading>
          <List>
            <Appear>
              <ListItem>Use bitmasks calculations to improve performance</ListItem>
            </Appear>
            <Appear>
              <ListItem>Potentially use them for our translations or theme whitelabel solutions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Keep learning!! 💪</ListItem>
            </Appear>
          </List>
        </Slide>
      </Deck>
    );
  }
}
