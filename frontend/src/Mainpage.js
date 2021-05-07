import React from 'react';
function Mainpage() {
  return <Frame {...frameData} />;
}

export default Mainpage;

function Frame(props) {
  const {
    welcomeToGoogle,
    text1,
    rectangle4,
    rectangle5,
    rectangle6,
    rectangle7,
    component7Props,
    sideNavItemsProps,
    component1Props,
    component8Props,
    group1Props,
    group2Props,
    group1Props2,
    group2Props2,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="frame screen">
        <Component7
          place={component7Props.place}
          yourRole={component7Props.yourRole}
          getConnected={component7Props.getConnected}
          notificationBell={component7Props.notificationBell}
          shareSquare180Ro={component7Props.shareSquare180Ro}
          placeholderAvatar={component7Props.placeholderAvatar}
        />
        <div className="flex-row">
          <div className="overlap-group">
            <SideNavItems
              sideNavItems={sideNavItemsProps.sideNavItems}
              ellipse4={sideNavItemsProps.ellipse4}
              name={sideNavItemsProps.name}
            />
            <Component8 {...component8Props} />
          </div>
          <div className="content">
            <div className="welcome-to-google">{welcomeToGoogle}</div>
            <div className="surface-0-eleva-n-or-background">
              <div className="overlap-group1">
                <div className="text-1">{text1}</div>
                <div className="flex-row-1">
                  {/*eslint-disable-next-line*/}
                  <img className="rectangle-" src={rectangle4} />
                  {/*eslint-disable-next-line*/}
                  <img className="rectangle--1" src={rectangle5} />
                </div>
                <div className="flex-row-2">
                  <Group1
                    internGameDay={group1Props.internGameDay}
                    keyboardArrowRightProps={group1Props.keyboardArrowRightProps}
                  />
                  <Group2
                    internGameDayI86={group2Props.internGameDayI86}
                    keyboardArrowRightProps={group2Props.keyboardArrowRightProps}
                  />
                </div>
                <div className="flex-row-1">
                  {/*eslint-disable-next-line*/}
                  <img className="rectangle-" src={rectangle6} />
                  {/*eslint-disable-next-line*/}
                  <img className="rectangle--1" src={rectangle7} />
                </div>
                <div className="flex-row-2">
                  <Group2
                    internGameDayI86={group1Props2.internGameDayI86}
                    keyboardArrowRightProps={group1Props2.keyboardArrowRightProps}
                    className="group-3"
                  />
                  <Group1
                    internGameDay={group2Props2.internGameDay}
                    keyboardArrowRightProps={group2Props2.keyboardArrowRightProps}
                    className="group-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component7(props) {
  const { place, yourRole, getConnected, notificationBell, shareSquare180Ro, placeholderAvatar } = props;

  return (
    <div className="component-7">
      <div className="logo"></div>
      <div className="overlap-group5">
        <div className="place valign-text-middle">{place}</div>
      </div>
      <div className="overlap-group6">
        <div className="your-role valign-text-middle inter-medium-royal-blue-16px">{yourRole}</div>
      </div>
      <div className="overlap-group4">
        <div className="get-connected valign-text-middle inter-medium-royal-blue-16px">{getConnected}</div>
      </div>
      <div className="notification-bell valign-text-middle fontawesome5free-regular-normal-silver-24px">
        {notificationBell}
      </div>
      <h1 className="share-square-180-ro valign-text-middle fontawesome5free-regular-normal-silver-24px">
        {shareSquare180Ro}
      </h1>
      {/*eslint-disable-next-line*/}
      <img className="placeholder-avatar" src={placeholderAvatar} />
    </div>
  );
}


function SideNavItems(props) {
  const { sideNavItems, ellipse4, name, className } = props;

  return (
    <div className={`side-nav-items-4 ${className || ""}`} style={{ backgroundImage: `url(${sideNavItems})` }}>
      {/*eslint-disable-next-line*/}
      <img className="ellipse-4" src={ellipse4} />
      <div className="name valign-text-middle inter-regular-normal-dove-gray-14px">{name}</div>
    </div>
  );
}


function Component1(props) {
  const { component1, ellipse4, name, a558B426Cb8973523F37Bbed94Cf0F091, figma, className } = props;

  return (
    <div className={`component-1 ${className || ""}`} style={{ backgroundImage: `url(${component1})` }}>
      {/*eslint-disable-next-line*/}
      <img className="ellipse-4-1" src={ellipse4} />
      <div className="name-1 valign-text-middle inter-regular-normal-dove-gray-14px">{name}</div>
      {/*eslint-disable-next-line*/}
      <img className="a558b426cb89735-7bbed94cf0f09-1" src={a558B426Cb8973523F37Bbed94Cf0F091} />
      <div className="figma valign-text-middle inter-regular-normal-dove-gray-14px">{figma}</div>
    </div>
  );
}


function Component8(props) {
  const {
    settings,
    cog,
    connections,
    text2,
    rooms,
    overlapGroup2,
    overlapGroup3,
    vector2,
    yourTeamCompany,
    overlapGroup22,
    vector3,
    text3,
    sideNavItemsProps,
    sideNavItems2Props,
    sideNavItems3Props,
    sideNavItems4Props,
    sideNavItems5Props,
    component1Props,
    component12Props,
    component13Props,
    component14Props,
    component15Props,
  } = props;

  return (
    <div className="component-8">
      <div className="overlap-group1-1">
        <div className="side-nav-container">
          <div className="settings valign-text-middle">{settings}</div>
          <div className="cog valign-text-middle">{cog}</div>
        </div>
        <SideNavItems
          sideNavItems={sideNavItemsProps.sideNavItems}
          ellipse4={sideNavItemsProps.ellipse4}
          name={sideNavItemsProps.name}
          className="side-nav-items-2"
        />
        <SideNavItems
          sideNavItems={sideNavItems2Props.sideNavItems}
          ellipse4={sideNavItems2Props.ellipse4}
          name={sideNavItems2Props.name}
          className="side-nav-items-1"
        />
        <SideNavItems
          sideNavItems={sideNavItems3Props.sideNavItems}
          ellipse4={sideNavItems3Props.ellipse4}
          name={sideNavItems3Props.name}
          className="side-nav-items-3"
        />
        <SideNavItems
          sideNavItems={sideNavItems4Props.sideNavItems}
          ellipse4={sideNavItems4Props.ellipse4}
          name={sideNavItems4Props.name}
          className="side-nav-items"
        />
        <SideNavItems
          sideNavItems={sideNavItems5Props.sideNavItems}
          ellipse4={sideNavItems5Props.ellipse4}
          name={sideNavItems5Props.name}
          className="side-nav-items-5"
        />
        <div className="connections valign-text-middle inter-medium-black-16px">{connections}</div>
        <div className="text-2 valign-text-middle inter-medium-black-16px">{text2}</div>
        <div className="rooms valign-text-middle inter-medium-black-16px">{rooms}</div>
        <div className="refresh">
          <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
            {/*eslint-disable-next-line*/}
            <img
              className="vector"
              src="https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/vector@2x.png"
            />
          </div>
        </div>
        <div className="add">
          <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup3})` }}>
            {/*eslint-disable-next-line*/}
            <img className="vector" src={vector2} />
          </div>
        </div>
        <div className="group-12">
          <div className="flex-row-3">
            <div className="your-team-company valign-text-middle inter-medium-black-16px">{yourTeamCompany}</div>
            <div className="keyboardarrowright">
              <div className="overlap-group2-1" style={{ backgroundImage: `url(${overlapGroup22})` }}>
                {/*eslint-disable-next-line*/}
                <img className="vector" src={vector3} />
              </div>
            </div>
          </div>
          <p className="text-3 valign-text-middle">{text3}</p>
        </div>
        <div className="group-11">
          <Component1
            ellipse4={component1Props.ellipse4}
            component1={component1Props.component1}
            name={component1Props.name}
            a558B426Cb8973523F37Bbed94Cf0F091={component1Props.a558B426Cb8973523F37Bbed94Cf0F091}
            figma={component1Props.figma}
            className="component-2"
          />
          <Component1
            component1={component12Props.component1}
            ellipse4={component12Props.ellipse4}
            name={component12Props.name}
            a558B426Cb8973523F37Bbed94Cf0F091={component12Props.a558B426Cb8973523F37Bbed94Cf0F091}
            figma={component12Props.figma}
            className="component-"
          />
          <Component1
            component1={component13Props.component1}
            ellipse4={component13Props.ellipse4}
            name={component13Props.name}
            a558B426Cb8973523F37Bbed94Cf0F091={component13Props.a558B426Cb8973523F37Bbed94Cf0F091}
            figma={component13Props.figma}
            className="component-4"
          />
          <Component1
            figma={component14Props.figma}
            component1={component14Props.component1}
            ellipse4={component14Props.ellipse4}
            name={component14Props.name}
            a558B426Cb8973523F37Bbed94Cf0F091={component14Props.a558B426Cb8973523F37Bbed94Cf0F091}
            className="component-"
          />
          <Component1
            figma={component15Props.figma}
            component1={component15Props.component1}
            ellipse4={component15Props.ellipse4}
            name={component15Props.name}
            a558B426Cb8973523F37Bbed94Cf0F091={component15Props.a558B426Cb8973523F37Bbed94Cf0F091}
            className="component-"
          />
        </div>
      </div>
    </div>
  );
}


function Group1(props) {
  const { internGameDay, keyboardArrowRightProps, className } = props;

  return (
    <div className={`group-1 ${className || ""}`}>
      <div className="intern-game-day valign-text-middle">{internGameDay}</div>
      <KeyboardArrowRight overlapGroup2={keyboardArrowRightProps.overlapGroup2} />
    </div>
  );
}


function KeyboardArrowRight(props) {
  const { overlapGroup2, className } = props;

  return (
    <div className={`keyboardarrowright-1 ${className || ""}`}>
      <div className="overlap-group2-2" style={{ backgroundImage: `url(${overlapGroup2})` }}>
        {/*eslint-disable-next-line*/}
        <img
          className="vector-1"
          src="https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/vector@2x.png"
        />
      </div>
    </div>
  );
}


function Group2(props) {
  const { internGameDayI86, keyboardArrowRightProps, className } = props;

  return (
    <div className={`group-2 ${className || ""}`}>
      <div className="intern-game-day-i86 valign-text-middle inter-medium-royal-blue-18px">{internGameDayI86}</div>
      <KeyboardArrowRight overlapGroup2={keyboardArrowRightProps.overlapGroup2} className="keyboardarrowright-2" />
    </div>
  );
}

const component7Data = {
    place: "Home",
    yourRole: "Your role",
    getConnected: "Get connected",
    notificationBell: "",
    shareSquare180Ro: "question-circle",
    placeholderAvatar: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/placeholder---avatar@2x.png",
};

const sideNavItemsData = {
    sideNavItems: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4@2x.png",
    name: "Linda",
};



const sideNavItems2Data = {
    sideNavItems: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-2@2x.png",
    name: "Amy",
};

const sideNavItems3Data = {
    sideNavItems: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-3@2x.png",
    name: "Brendan",
};

const sideNavItems4Data = {
    sideNavItems: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-4@2x.png",
    name: "Denny",
};

const sideNavItems5Data = {
    sideNavItems: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-5@2x.png",
    name: "Cornor",
};

const sideNavItems6Data = {
    sideNavItems: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-6@2x.png",
    name: "Kathy",
};

const component12Data = {
    component1: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-1@2x.png",
    name: "Jennie",
    a558B426Cb8973523F37Bbed94Cf0F091: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/a558b426cb8973523f37bbed94cf0f09-1@2x.png",
    figma: "Figma",
};

const component13Data = {
    component1: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-8@2x.png",
    name: "Kaite",
    a558B426Cb8973523F37Bbed94Cf0F091: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/a558b426cb8973523f37bbed94cf0f09-1-2@2x.png",
    figma: "WPS Office",
};

const component14Data = {
    component1: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-9@2x.png",
    name: "John",
    a558B426Cb8973523F37Bbed94Cf0F091: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/a558b426cb8973523f37bbed94cf0f09-1-3@2x.png",
    figma: "Google Drive",
};

const component15Data = {
    component1: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-1@2x.png",
    name: "Jessica",
    a558B426Cb8973523F37Bbed94Cf0F091: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/a558b426cb8973523f37bbed94cf0f09-1@2x.png",
    figma: "Figma",
};

const component16Data = {
    component1: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle@2x.png",
    ellipse4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/ellipse-4-1@2x.png",
    name: "Benjamin",
    a558B426Cb8973523F37Bbed94Cf0F091: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/a558b426cb8973523f37bbed94cf0f09-1@2x.png",
    figma: "Figma",
};

const component8Data = {
    settings: "Settings",
    cog: "cog",
    connections: "Connections",
    text2: "Potential Connections",
    rooms: "Rooms",
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector-8@2x.png",
    overlapGroup3: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector-10@2x.png",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/vector@2x.png",
    yourTeamCompany: "Your Team & Company",
    overlapGroup22: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector-12@2x.png",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/6094544246fdaea7feb7db1b/img/vector@2x.png",
    text3: "Learn more about your company and teams.",
    sideNavItemsProps: sideNavItems2Data,
    sideNavItems2Props: sideNavItems3Data,
    sideNavItems3Props: sideNavItems4Data,
    sideNavItems4Props: sideNavItems5Data,
    sideNavItems5Props: sideNavItems6Data,
    component1Props: component12Data,
    component12Props: component13Data,
    component13Props: component14Data,
    component14Props: component15Data,
    component15Props: component16Data,
};

const keyboardArrowRightData = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector@2x.png",
};

const group1Data = {
    internGameDay: "Intern Game Day",
    keyboardArrowRightProps: keyboardArrowRightData,
};

const keyboardArrowRight2Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector-2@2x.png",
};

const group2Data = {
    internGameDayI86: "Welcome Spa, Yoga, Meditation Day",
    keyboardArrowRightProps: keyboardArrowRight2Data,
};

const keyboardArrowRight3Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector-2@2x.png",
};

const group22Data = {
    internGameDayI86: "Ice Breaking Activity",
    keyboardArrowRightProps: keyboardArrowRight3Data,
};

const keyboardArrowRight4Data = {
    overlapGroup2: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/vector-2@2x.png",
};

const group12Data = {
    internGameDay: "Orientation",
    keyboardArrowRightProps: keyboardArrowRight4Data,
};

const frameData = {
    welcomeToGoogle: "Welcome to Google!",
    text1: "We’re so excited to welcome you as a engineer intern on the Cornell Tech team! We created this page, personalised to you, to help you get started. Join event rooms and get to know other interns and teams.",
    rectangle4: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle-4@2x.png",
    rectangle5: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle-5@2x.png",
    rectangle6: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle-6@2x.png",
    rectangle7: "https://anima-uploads.s3.amazonaws.com/projects/60945387f79955c69361f394/releases/60946371e390cab39eca8378/img/rectangle-7@2x.png",
    component7Props: component7Data,
    sideNavItemsProps: sideNavItemsData,
    component8Props: component8Data,
    group1Props: group1Data,
    group2Props: group2Data,
    group1Props2: group22Data,
    group2Props2: group12Data,
};