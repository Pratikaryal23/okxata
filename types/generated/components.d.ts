import type { Schema, Struct } from '@strapi/strapi';

export interface MissionLandingabout extends Struct.ComponentSchema {
  collectionName: 'components_mission_landingabouts';
  info: {
    displayName: 'Landingabout';
    icon: 'rocket';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface MissionMissionandvision extends Struct.ComponentSchema {
  collectionName: 'components_mission_missionandvisions';
  info: {
    displayName: 'Missionandvision';
    icon: 'arrowRight';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCourseCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_course_cards';
  info: {
    displayName: 'CourseCard';
    icon: 'briefcase';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface SharedCourses extends Struct.ComponentSchema {
  collectionName: 'components_shared_courses';
  info: {
    displayName: 'Courses';
    icon: 'book';
  };
  attributes: {
    CourseCard: Schema.Attribute.Component<'shared.course-card', true>;
    Description: Schema.Attribute.RichText;
  };
}

export interface SharedDetailsHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_details_heroes';
  info: {
    displayName: 'DetailsHero';
    icon: 'globe';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedHeroService extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_services';
  info: {
    displayName: 'HeroService';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface SharedLandingService extends Struct.ComponentSchema {
  collectionName: 'components_shared_landing_services';
  info: {
    displayName: 'LandingService';
    icon: 'crown';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedRoadmap extends Struct.ComponentSchema {
  collectionName: 'components_shared_roadmaps';
  info: {
    displayName: 'Roadmap';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Roadmapdetail: Schema.Attribute.Component<'shared.roadmapdetail', true>;
  };
}

export interface SharedRoadmapdetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_roadmapdetails';
  info: {
    displayName: 'Roadmapdetail';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedService extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ServiceDescription: Schema.Attribute.RichText;
    ServiceTitle: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSolution extends Struct.ComponentSchema {
  collectionName: 'components_shared_solutions';
  info: {
    displayName: 'Solution';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

export interface SharedTeams extends Struct.ComponentSchema {
  collectionName: 'components_shared_teams';
  info: {
    displayName: 'Teams';
    icon: 'check';
  };
  attributes: {
    GithubUrl: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    LinkedinUrl: Schema.Attribute.Text;
    Name: Schema.Attribute.String;
    Role: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'cursor';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Name: Schema.Attribute.String;
    Position: Schema.Attribute.String;
  };
}

export interface SharedWhatdefineus extends Struct.ComponentSchema {
  collectionName: 'components_shared_whatdefineuses';
  info: {
    displayName: 'whatdefineus';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SharedWhatwedo extends Struct.ComponentSchema {
  collectionName: 'components_shared_whatwedos';
  info: {
    displayName: 'whatwedo';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface SharedWhyChooseus extends Struct.ComponentSchema {
  collectionName: 'components_shared_why_chooseuses';
  info: {
    displayName: 'WhyChooseus';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'mission.landingabout': MissionLandingabout;
      'mission.missionandvision': MissionMissionandvision;
      'shared.course-card': SharedCourseCard;
      'shared.courses': SharedCourses;
      'shared.details-hero': SharedDetailsHero;
      'shared.hero-service': SharedHeroService;
      'shared.landing-service': SharedLandingService;
      'shared.rich-text': SharedRichText;
      'shared.roadmap': SharedRoadmap;
      'shared.roadmapdetail': SharedRoadmapdetail;
      'shared.seo': SharedSeo;
      'shared.service': SharedService;
      'shared.slider': SharedSlider;
      'shared.solution': SharedSolution;
      'shared.teams': SharedTeams;
      'shared.testimonial': SharedTestimonial;
      'shared.whatdefineus': SharedWhatdefineus;
      'shared.whatwedo': SharedWhatwedo;
      'shared.why-chooseus': SharedWhyChooseus;
    }
  }
}
