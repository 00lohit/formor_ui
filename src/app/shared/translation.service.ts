import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  teluguText: any = {
    'Details Panel': 'రైతు వివరాలు',
    'Name of Farmer': 'రైతు పేరు',
    'Road Access (in Kms)': 'రోడ్ నుండి దూరము (కి.మీ. లో)',
    'Village / Town': 'గ్రామము',
    District: 'జిల్లా',
    State: 'రాష్ట్రం',
    'Cultivation Details': 'సాగు వివరాలు',
    'Name of the First Crop': 'మొదటి పంట పేరు',
    'Name of the Second Crop': 'రెండవ పంట పేరు',
    'Name of the Third Crop': 'మూడవ పంట పేరు',
    'Name of the Fourth Crop': 'నాలుగో పంట పేరు',
    Variety: 'వెరైటీ //రకం ',
    'No of Acres': 'ఎకరాల సంఖ్య',
    Type: 'వ్యవసాయం రకం',
    'Sown Week': 'నాటిన వారం',
    Month: 'నెల',
    Year: 'సంవత్సరం',
    'Add Crop': 'మరొక పంటను జోడించండి',
    'Delete Crop': 'డిలీట్',
    'Harvest details': 'కోత వివరాలు',
    'Expected First Crop harvest date': 'మొదటి పంట కోత వారం',
    'Expected First Crop Output (in Quintal)':
      'మొదటి పంట ఉత్పత్తి (క్వింటాల్ల లో) ',
    'Convert Bags to Quintal': 'బాగ్స్ ను క్వింటాల్ లోకి మార్చు',
    'Previous Harvest details': 'మునుపటి పంట వివరాలు',
    'Name of the Previous Crop-1': 'మునుపటి పంట -1',
    'Name of the Previous Crop-2': 'మునుపటి పంట -2',
    'Name of the Previous Crop-3': 'మునుపటి పంట -3',
    'Name of the Previous Crop-4': 'మునుపటి పంట -4',
    'Crop-1 Output (in Quintal)': '1వ పంట ఉత్పత్తి (క్వింటాల్ల లో) ',
    'Crop-2 Output (in Quintal)': '2వ పంట ఉత్పత్తి (క్వింటాల్ల లో) ',
    'Crop-3 Output (in Quintal)': '3వ పంట ఉత్పత్తి (క్వింటాల్ల లో) ',
    'Crop-4 Output (in Quintal)': '4వ పంట ఉత్పత్తి (క్వింటాల్ల లో) ',
    'Selling Rate of Crop-1': '1వ పంట అమ్మిన ధర',
    'Selling Rate of Crop-2': '2వ పంట అమ్మిన ధర',
    'Selling Rate of Crop-3': '3వ పంట అమ్మిన ధర',
    'Selling Rate of Crop-4': '4వ పంట అమ్మిన ధర',
    Organic: 'సేంద్రీయ వ్యవసాయం',
    Conventional: 'రసాయన ఎరువుల వ్యవసాయం',
  };

  constructor() {}

  translateToTelugu() {
    return JSON.stringify(this.teluguText);
  }
}
