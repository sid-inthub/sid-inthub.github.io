---
layout: default
title: Sid - Integration & Solution Architect
availability_status: "Available for New Engagements"
---

{% include section-profile.html %}
{% include section-projects.html %}

<!-- TABS CONTAINER -->
<div class="tabs-wrapper" id="portfolio-tabs">
  <!-- Segmented Control Navigation -->
  <div class="segmented-control" role="tablist" aria-label="Portfolio Sections">
    <button role="tab" aria-selected="true" aria-controls="skills-panel" id="tab-skills" class="segment-btn active">Skills</button>
    <button role="tab" aria-selected="false" aria-controls="certifications-panel" id="tab-certs" class="segment-btn">Certifications & Edu</button>
    <button role="tab" aria-selected="false" aria-controls="experience-panel" id="tab-exp" class="segment-btn">Experience</button>
  </div>

  <!-- Tab Panels -->
  <div class="tab-content active" id="skills-panel" role="tabpanel" aria-labelledby="tab-skills">
    {% include section-skills.html %}
  </div>

  <div class="tab-content" id="certifications-panel" role="tabpanel" aria-labelledby="tab-certs">
    {% include section-certifications.html %}
  </div>

  <div class="tab-content" id="experience-panel" role="tabpanel" aria-labelledby="tab-exp">
    {% include section-experience.html %}
  </div>
</div>
