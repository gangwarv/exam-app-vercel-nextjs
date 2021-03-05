/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
////localhost:3000/about#error_description=attributes+required%3A+%5Bphone_number%5D&error=invalid_request
//http://localhost:3000/about#access_token=eyJraWQiOiJPbnRHTWl3MkFtdlFpNnlHT0VhWWxaQllPZDRuQmJEMTlPY0p3SG9DV05zPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2ZDZkZGQyNi00NGNlLTQzNGMtYjM0ZS1mY2I5NzEzZTU0ZWUiLCJjb2duaXRvOmdyb3VwcyI6WyJhcC1zb3V0aC0xX1J3ZkNQRllUcF9GYWNlYm9vayJdLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjExNTk1OTUxLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xX1J3ZkNQRllUcCIsImV4cCI6MTYxMTU5OTU1MSwiaWF0IjoxNjExNTk1OTUxLCJ2ZXJzaW9uIjoyLCJqdGkiOiI4ZjAwYTI0Yy03ZWZlLTQ3MmUtYjM4Mi1hNjM3NWY2OTM1YmIiLCJjbGllbnRfaWQiOiI1Nm4yMmI4ZTE4amRmYTZrZjRuM2djbTZ0OSIsInVzZXJuYW1lIjoiZmFjZWJvb2tfMzY4OTAzNDcyNzg1NjQ4MSJ9.bcugEJopiuw_qpuTqrN8ZkugeZJZImNNTmaYeSgGHBK2QWv2VA_M22ZuVMiFXU3MszQmbuoL0Si32hjPI6iZxeBLiUbRa5mwd-cx_tQWtY_sdXA1VhtBAhhlxtTrI-3A2r3hp0zP9namRx3A9FsPnC3nzrRd06Od8H6qU6kK2RPZ3WkGFkgouC9wpwYnucHdV1lwa1SpP2DEEwf-zirZbxgq5cOz_ILGXaBuvBPJgWUhWok4lXQGULzMaR1uX45HyysgyF77PGosuhbW-iOQA7n4g0wspX47Nt8182lBqj7AFM_igmAOLe4bZojXFxSXYLbhb9MiJ69rBYeMulS31g&id_token=eyJraWQiOiJudU9kZDQyejBqWkxWY0lRRnRPNHJUc0pWV2Vudk5XOWJPYllOWFY5Uks0PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoid1hHZm9YZlc1N0t3NjdYNy1SdkNodyIsInN1YiI6IjZkNmRkZDI2LTQ0Y2UtNDM0Yy1iMzRlLWZjYjk3MTNlNTRlZSIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfUndmQ1BGWVRwX0ZhY2Vib29rIl0sImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV9Sd2ZDUEZZVHAiLCJjb2duaXRvOnVzZXJuYW1lIjoiZmFjZWJvb2tfMzY4OTAzNDcyNzg1NjQ4MSIsIm5vbmNlIjoicmdqd0ViNDVOc2VOUVFLSFpLb1Z1dkN6djlHUEdtX1g0WDVNU2ltUmxfS1NxZG5iVlhuR2Y4aTlfRWdlSXdLUFBXamhiYnMtU3hNSEpoWExvTU5zbFMzVkxPWFd3WHJvd2R6dndCVDNYdlhHamx1eWJUUlZ3MkpIa1doU25iczlGZVlOckx3TnBkTmhrVnllblgxejdURTNRR1ZpeHhmUVdWZVJMbE1aa1M4IiwiYXVkIjoiNTZuMjJiOGUxOGpkZmE2a2Y0bjNnY202dDkiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIzNjg5MDM0NzI3ODU2NDgxIiwicHJvdmlkZXJOYW1lIjoiRmFjZWJvb2siLCJwcm92aWRlclR5cGUiOiJGYWNlYm9vayIsImlzc3VlciI6bnVsbCwicHJpbWFyeSI6InRydWUiLCJkYXRlQ3JlYXRlZCI6IjE2MTE1OTU5NTE0NjUifV0sInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjExNTk1OTUxLCJleHAiOjE2MTE1OTk1NTEsImlhdCI6MTYxMTU5NTk1MSwiZW1haWwiOiJnYW5nd2FyX3ZAeWFob28uaW4ifQ.Dtywc7TNTp6kkhv8-PsFp8KMHn6v-o-zwCu4S8m1rf0T3HtMT3u75QoEe-aPNSPomxBxcyMlN5QHD-CnZz4LSnyRF7TEkAJldhw3MlhbWtcUo5FhwthQuSMMT6Ek2uWXEMOHt-wvcLJwG5BpFu_ZyrONEkpTMZbyOjmyAc_VZfjhqTTmQcunpAJFiigcd-oSJXGFWeNyw-XBot6NXekJFWwMrQMLTazfHo8is6KLZrsMxnhdCxJu8VTd10E214TB5AcrujockpNvpSz4AidUFIJUX9Lf_wPVu1WcYnGpvRWYR1xb6ihHsIgfso2rbG3NaOTdTgkk-ZbVUbOP0IgIkg&token_type=Bearer&expires_in=3600
/*
App client id
56n22b8e18jdfa6kf4n3gcm6t9
App client secret
1uuf1i07pd8khhlhvn305rc73voc4184l6h6sne8l2hm7bblrqap
Refresh token expiration
*/

import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";
import Footer from "./Footer";

import {
  Breadcrumb,
  Button,
  Container,
  Icon,
  Menu,
  Message,
  Search,
  Segment,
  Sidebar,
} from "semantic-ui-react";

interface Props {
  children: Array<React.ReactElement> | React.ReactElement;
  banner?: ReactElement;
  breadcrumbs?: Array<string>;
}
// export default ResponsiveContainer;
export default function UniversalLayout({
  children,
  banner,
  breadcrumbs,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {
    isLoggedIn,
    appName,
    logIn,
    logOut,
    logo: { src },
    user: { profileUrl, name },
    menus,
  } = useContext(AuthContext);

  function onResize() {
    console.log(window.outerWidth, window.outerHeight, isMobile);
    setIsMobile(window.outerWidth < 600);
    return onResize;
  }

  useEffect(() => {
    if (window) window.onresize = onResize();
    return () => {
      if (window) window.removeEventListener("resize", onResize);
    };
  }, [isMobile]);

  const router = useRouter();

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="uncover"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
          size="large"
        >
          <Menu.Item>
            <img className="ui avatar mini image" src={profileUrl} />
            <span style={{ color: "orange", paddingLeft: ".2em" }}>
              {name.split(" ")[0]}
            </span>
            {/* <Label basic color="orange">hi</Label> */}
          </Menu.Item>
          {menus.map((m) => (
            <Link key={m.name} href={m.path}>
              <Menu.Item active={router.pathname == m.path} name={m.name} />
            </Link>
          ))}
          {isLoggedIn ? (
            <Menu.Item onClick={logOut} name="home" as="a">
              Log out
            </Menu.Item>
          ) : (
            <Menu.Item onClick={logIn} name="home" as="a">
              Log in
            </Menu.Item>
          )}
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment inverted style={{ padding: "0em 0em" }}>
            <Menu
              style={{ padding: isMobile ? undefined : "0em 5em" }}
              inverted
              borderless
              size="large"
            >
              {isMobile && (
                <Menu.Item onClick={() => setVisible(!visible)}>
                  <Icon size="large" name="sidebar" />
                </Menu.Item>
              )}
              {!isMobile && (
                <Menu.Item>
                  <img src={src} />
                  <span style={{ fontSize: "22px", color: "orange" }}>
                    {appName}
                  </span>
                </Menu.Item>
              )}
              {!isMobile &&
                menus.map((m) => (
                  <Link key={m.name} href={m.path}>
                    <Menu.Item link href={m.path}
                      active={router.pathname == m.path}
                      name={m.name}
                    />
                  </Link>
                ))
                }

              <Menu.Menu position="right">
                <Menu.Item style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                  <Search size="small" />
                </Menu.Item>
                <Menu.Item>
                  {isLoggedIn ? (
                    <Button onClick={logOut} icon="sign out" inverted as="a">
                      {isMobile ? null : "Log Out"}
                    </Button>
                  ) : (
                    <Button
                      onClick={logIn}
                      circular
                      icon="sign in"
                      inverted
                      as="a"
                    >
                      {isMobile ? null : "Log In"}
                    </Button>
                  )}
                </Menu.Item>
              </Menu.Menu>
            </Menu>
            {banner}
          </Segment>
          <Container>
            {breadcrumbs && (
              <Breadcrumb>
                {breadcrumbs.map((x, i, arr) => {
                  const isLast = i == arr.length - 1;
                  const isLastSecond = i == arr.length - 2;

                  return (
                    <>
                      <Breadcrumb.Section
                        link={!isLast}
                        active={isLast}
                        key={i}
                      >
                        {x}
                      </Breadcrumb.Section>

                      {isLast ? null : (
                        <Breadcrumb.Divider
                          key={x}
                          icon={isLastSecond ? "right arrow" : "right chevron"}
                        />
                      )}
                    </>
                  );
                })}
              </Breadcrumb>
            )}

            {/* <Breadcrumb.Section link>Home</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section link>Registration</Breadcrumb.Section>
            <Breadcrumb.Divider icon="right arrow" />
            <Breadcrumb.Section active>Personal Information</Breadcrumb.Section> */}

            {children}
          </Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Footer />
    </>
  );
}
