{/\*_<Router>_/}

      {/* <Switch> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} /> */}
      {/* </Switch> */}
    {/* // </Router> */}


    <Menu open variant="menu">
            <MenuItem LinkComponent={'a'} href="/" key={'Home'}>
              VANESSA WONG
            </MenuItem>

            <MenuItem LinkComponent={'a'} href="/About" key={'About'}>
              ABOUT
            </MenuItem>
            <MenuItem>ABOUT</MenuItem>
            <MenuItem>EXPERIENCE</MenuItem>
            <MenuItem>CONTACT</MenuItem>
          </Menu>

          <Tabs>
                <Tab
                  label={<Typography variant="h3">VANESSA WONG</Typography>}
                  LinkComponent="a"
                  href="/"
                />

                <Tab
                  label={<Typography variant="h3">ABOUT</Typography>}
                  LinkComponent="a"
                  href="/About"
                />
              </Tabs>


                    <Menu open={menuOpenState} variant="menu">
        <MenuItem LinkComponent={'a'} href="/" key={'Home'}>
          VANESSA WONG
        </MenuItem>

        <MenuItem LinkComponent={'a'} href="/About" key={'About'}>
          ABOUT
        </MenuItem>
      </Menu>
