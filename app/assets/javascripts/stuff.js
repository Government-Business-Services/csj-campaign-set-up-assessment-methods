var strengths = ['Adaptable','Analytical','Authentic','Catalyst','Challenger','Change Agent','Courageous','Decisive','Efficient','Emotionally Intelligent','Enabler','Explainer','Focussed','Improver','Inclusive','Influencer','Learner','Mediator','Mission','Motivator','Negotiator','Networker','Organiser','Precise','Preventer','Problem Solver','Relationship Builder','Resilient','Responsible','Service Focussed','Strategic','Team Leader','Team Player','Visionary'];

var selectedStrengths = [];







{% set strengthsMethods = ['Interviews','Civil Service Work Strengths Test'] %}
{% set stage = ['Pre-application','Application','Interview'] %}
{% set strengths = [['Adaptable','',''],['Analytical','',''],['Authentic','',''],['Catalyst','',''],['Challenger','',''],['Change Agent','',''],['Courageous','',''],['Decisive','',''],['Efficient','',''],['Emotionally Intelligent','',''],['Enabler','',''],['Explainer','',''],['Focussed','',''],['Improver','',''],['Inclusive','',''],['Influencer','',''],['Learner','',''],['Mediator','',''],['Mission','',''],['Motivator','',''],['Negotiator','',''],['Networker','',''],['Organiser','',''],['Precise','',''],['Preventer','',''],['Problem Solver','',''],['Relationship Builder','',''],['Resilient','',''],['Responsible','',''],['Service Focussed','',''],['Strategic','',''],['Team Leader','',''],['Team Player','',''],['Visionary','','']] %}

<form class="form" action="how-assess?method=strengths" method="post">

  <div class="govuk-form-group">

    {% for a, b in strengths | slice(1)  %}
    <div class="govuk-checkboxes govuk-checkboxes--small -{{ loop.index }}" data-module="govuk-checkboxes" name="streCheck">
      {%- for aa in a, b %}
      <div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="streCheck" name="streCheck" type="checkbox" value="checked('strengths[a][b]')">

        <label class="govuk-label govuk-checkboxes__label" for="streCheck"> {{ aa }}</label></div>
        {%- endfor %}

      </div>
      {%- endfor %}
      <button class="govuk-button" data-module="govuk-button">Continue</button>

    </form>
