<template>
    <div class="navbar-spacer container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="timeline">
              <project
                date="Nov 2007 - Nov 2008"
                name="Iraq"
                description="I was an Infantrymen in the US Army and did one tour in Iraq in several provenances throughout the country"
                url="https://en.wikipedia.org/wiki/Iraq_War"
              />
              <project
                date="May 2010- June 2011"
                name="Afghanistan"
                description="I was a recon platoon in the US Army and did one tour in Afghanistan. While in Afghanistan I found my passion for developing and have devoted myself since"
                url="https://en.wikipedia.org/wiki/International_Security_Assistance_Force"
                :inverted=true
              />
              <project
                date="May 2010-2017"
                name="Freelance"
                description="I participated in many freelance projects after my completion of my Computer Science Degree"
                githubUrl=""
              />
              <project
                date="December 2015"
                name="Rivera Group"
                description="I was working working with an amazing team at goArmy.com but I wanted to use more cutting edge technologies. They were a great group of people to work with and will be forever missed!"
                url="https://www.riverainc.com/"
                :inverted=true
              />
              <project
                date="May 2016"
                name="SAIC"
                description="SAIC is a very large company and I was very lucky to have so many fellow veterans around me like my project manager Issac Horton. This project was challenging but the US governments bureaucracy often made me wish I was in the private sector"
                url="https://www.saic.com/what-we-do/information-technology/software"
              />
              <project
                date="2017-present"
                name="Lidl Digital"
                description="When I spoke to Lidl digital and they told me the cutting edge technology they were using and considering, my only question was where do I sign. Have been happy with my decision ever since"
                url="https://digital.lidl/"
                :inverted=true
              />

              <project
                date="November 2018"
                name="W-jax"
                description="I was honored to be given the opportunity to speak among really intelligent people in Munich Germany at the w-jax conference"
                url="https://jax.de/"
              />
              <li>
                <div class="timeline-image">
                  <h4>VB <br /> dark <br /> period</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
</template>

<script>
import Project from './Project.vue';
export default {
  name: 'Projects',
  components: {
    Project
  }
}
</script>

<style scoped>
.navbar-spacer {
  padding-top: 90px;
}
</style>
