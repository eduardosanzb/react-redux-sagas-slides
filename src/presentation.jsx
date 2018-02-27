// Import React
import React from 'react';

// Import Spectacle Core tags
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

// Require CSS
require('normalize.css');

const images = {
  kat: require('./kat.png'),
  example: require('./containerOrComponent.png'),
  react0: require('./react0.png'),
  react1: require('./react1.png'),
  redux0: require('./redux0.png'),
  redux1: require('./redux1.png'),
  saga: require('./saga.png'),
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
          A NEW JavaScript library for building user interfaces based in components
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
          <ComponentPlayground
            code={reactExample}
            theme="light"
          />
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
        <Slide
          bgColor="black">
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
          <ComponentPlayground
            code={reactExample1}
            theme="light"
          />
        </Slide>
        <Slide
          transitionIn={['zoom', 'fade']}
          transitionOut={['slide', 'fade']}>
          <Heading size={3} textColor="secondary">
            Or
          </Heading>
          <Image src={images.redux0.replace('/', '')} margin="0px auto 40px" />
        </Slide>
        <Slide
          transitionOut={['slide', 'fade']}>
          <Heading size={6} caps fit textColor="secondary">
           Here we also have a cycle!! 💪
          </Heading>
          <Image src={images.redux1.replace('/', '')} style={{ maxHeight: '25em' }} />
        </Slide>
        <Slide transition={['slide', 'spin']} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            And what about those "Sagas"???
          </Heading>
          <Appear>
          <Image src={images.saga.replace('/', '')} style={{ maxHeight: '25em' }} />
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
          <Appear><ListItem>Enables more complex concurrent models</ListItem></Appear>
          <Appear><ListItem>Improves the performance reducing re-renders</ListItem></Appear>
          <Appear><ListItem>Enables more declarative codebase</ListItem></Appear>
        </List>
      </Slide>


      {/* CONTEXT API */}
      </Deck>
    );
  }
}
