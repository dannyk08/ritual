import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return data;
  }
});

const data = [
  {
    type: 'ingredient',
    id: 1,
    attributes: {
      name: 'Folate',
      syntheticForm: '5MTHF Glucosamine Salt',
      dosage: '600 mcg',
      origin: 'Pisticci, Italy',
      manufacturer: 'Gnosis',
      image: '/assets/images/folate.jpg',
      benefits: [
        {
          icon: 'mood',
          benefit: 'mood',
        },
        {
          icon: 'synthesis',
          benefit: 'dna synthesis',
        },
        {
          icon: 'brain-health',
          benefit: 'brain health',
        },
      ],
      naturalSources: ['lentils', 'avocado', 'oranges'],
    }
  },
  {
    id: 2,
    type: 'ingredient',
    attributes: {
      name: 'Omega-3',
      syntheticForm: '5MTHF Glucosamine Salt',
      dosage: '320 mg',
      origin: 'South Carolina, USA',
      manufacturer: 'Gnosis',
      image: '/assets/images/folate.jpg',
      benefits: [
        {
          icon: 'mood',
          benefit: 'mood',
        },
        {
          icon: 'synthesis',
          benefit: 'dna synthesis',
        },
        {
          icon: 'brain-health',
          benefit: 'brain health',
        },
      ],
      naturalSources: ['lentils', 'avocado', 'oranges'],
    }
  },
  {
    id: 3,
    type: 'ingredient',
    attributes: {
      name: 'Vitamin D3',
      syntheticForm: '5MTHF Glucosamine Salt',
      dosage: '2000 iu',
      origin: 'United Kingdom',
      manufacturer: 'Gnosis',
      image: '/assets/images/folate.jpg',
      benefits: [
        {
          icon: 'mood',
          benefit: 'mood',
        },
        {
          icon: 'synthesis',
          benefit: 'dna synthesis',
        },
        {
          icon: 'brain-health',
          benefit: 'brain health',
        },
      ],
      naturalSources: ['lentils', 'avocado', 'oranges'],
    }
  },
  {
    id: 4,
    type: 'ingredient',
    attributes: {
      name: 'Iron',
      syntheticForm: '5MTHF Glucosamine Salt',
      dosage: '8 mg',
      origin: 'Utah, USA',
      manufacturer: 'Gnosis',
      image: '/assets/images/folate.jpg',
      benefits: [
        {
          icon: 'mood',
          benefit: 'mood',
        },
        {
          icon: 'synthesis',
          benefit: 'dna synthesis',
        },
        {
          icon: 'brain-health',
          benefit: 'brain health',
        },
      ],
      naturalSources: ['lentils', 'avocado', 'oranges'],
    }
  },
  {
    id: 5,
    type: 'ingredient',
    attributes: {
      name: 'Vitamin K2',
      syntheticForm: '5MTHF Glucosamine Salt',
      dosage: '90 mcg',
      origin: 'Oslo, Norway',
      manufacturer: 'Gnosis',
      image: '/assets/images/folate.jpg',
      benefits: [
        {
          icon: 'mood',
          benefit: 'mood',
        },
        {
          icon: 'synthesis',
          benefit: 'dna synthesis',
        },
        {
          icon: 'brain-health',
          benefit: 'brain health',
        },
      ],
      naturalSources: ['lentils', 'avocado', 'oranges'],
    }
  },
  {
    id: 6,
    type: 'ingredient',
    attributes: {
      name: 'Magnesium',
      syntheticForm: '5MTHF Glucosamine Salt',
      dosage: '50 mg',
      origin: 'Pisa, Italy',
      manufacturer: 'Gnosis',
      image: '/assets/images/folate.jpg',
      benefits: [
        {
          icon: 'mood',
          benefit: 'mood',
        },
        {
          icon: 'synthesis',
          benefit: 'dna synthesis',
        },
        {
          icon: 'brain-health',
          benefit: 'brain health',
        },
      ],
      naturalSources: ['lentils', 'avocado', 'oranges'],
    }
  },
];
