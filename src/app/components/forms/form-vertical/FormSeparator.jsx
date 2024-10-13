import {
  Grid,
  InputAdornment,
  Button,
  Typography,
  Divider,
  MenuItem,
  IconButton,
} from '@mui/material';
import React from 'react';
import CustomFormLabel from '../theme-elements/CustomFormLabel';
import CustomTextField from '../theme-elements/CustomTextField';
import CustomOutlinedInput from '../theme-elements/CustomOutlinedInput';
import CustomSelect from '../theme-elements/CustomSelect';
import { Stack } from '@mui/system';
import { IconEye, IconEyeOff } from '@tabler/icons-react';

const countries = [
  {
    value: 'india',
    label: 'India',
  },
  {
    value: 'uk',
    label: 'United Kingdom',
  },
  {
    value: 'srilanka',
    label: 'Srilanka',
  },
];

const lang = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'fr',
    label: 'French',
  },
];

const FormSeparator = () => {
  // country
  const [country, setCountry] = React.useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  // language
  const [language, setLanguage] = React.useState('');

  const handleChange2 = (event) => {
    setLanguage(event.target.value);
  };

  //   password
  //
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //  confirm  password
  //
  const [showPassword2, setShowPassword2] = React.useState(false);

  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Typography variant="h6" mb={3}>
        Profile Details
      </Typography>
      {/* ------------------------------------------------------------------------------------------------ */}
      {/* Basic Layout */}
      {/* ------------------------------------------------------------------------------------------------ */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <CustomFormLabel htmlFor="fs-email" sx={{ mt: { sm: 0 } }}>
            1. Email Address
          </CustomFormLabel>
          <CustomOutlinedInput
            endAdornment={<InputAdornment position="end">@example.com</InputAdornment>}
            id="fs-email"
            placeholder="john.deo"
            fullWidth
          />
          <CustomFormLabel htmlFor="fs-province">
            3. Which province do you intend to live in Canada?
          </CustomFormLabel>
          <CustomTextField id="fs-province" placeholder="Ontario" fullWidth />

          <CustomFormLabel htmlFor="fs-fam">
            5. Family name
          </CustomFormLabel>
          <CustomTextField id="fs-fam" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-nick-name">
            7. Have you used any other names(eg. nicename,alias,etc.)
          </CustomFormLabel>
          <CustomTextField id="fs-nick-name" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-date"> 9. Birth Date</CustomFormLabel>
          <CustomTextField type="date" id="fs-date" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-country-birth">
            11. Country of Birth
          </CustomFormLabel>
          <CustomTextField id="fs-country-birth" placeholder="India" fullWidth />

          <CustomFormLabel htmlFor="fs-country-res" >
            13. Contry of residence
          </CustomFormLabel>
          <CustomTextField id="fs-country-res" placeholder="Canada" fullWidth />

        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-lang" sx={{ mt: { sm: 0 } }}>
            2. Select language preference for correspondence:
          </CustomFormLabel>
          <CustomTextField id="fs-lang" placeholder="English" fullWidth />

          <CustomFormLabel htmlFor="fs-city" >
            4. Which city do you intend to live in Canada?
          </CustomFormLabel>
          <CustomTextField id="fs-city" placeholder="Toronto" fullWidth />

          <CustomFormLabel htmlFor="fs-given-name">
            6. Given name
          </CustomFormLabel>
          <CustomTextField id="fs-given-name" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-gender">
            8. Gender
          </CustomFormLabel>
          <CustomTextField id="fs-gender" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-birth-city">
            10. Town/City of birth
          </CustomFormLabel>
          <CustomTextField id="fs-birth-city" placeholder="Mumbai" fullWidth />

          <CustomFormLabel htmlFor="fs-country-city" >
            12. Country of citizenship
          </CustomFormLabel>
          <CustomTextField id="fs-contry-city" placeholder="India" fullWidth />

          <CustomFormLabel htmlFor="fs-gender">
            14. Status - Contry of residence
          </CustomFormLabel>
          <CustomTextField id="fs-gender" placeholder="Student" fullWidth />

          
        </Grid>

        <Grid item xs={12}>
        <CustomFormLabel htmlFor="fs-country-ques">
        15. During the past 5 years have you lived in any other country or territory other than your country of citizenship or your current country of residence for more than 6 months?
        </CustomFormLabel>
        <CustomTextField id="fs-country-ques" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
        <CustomFormLabel htmlFor="fs-edu">
            16. What's your highest level of education
          </CustomFormLabel>
          <CustomTextField id="fs-edu" placeholder="Bachelor's Degree" fullWidth />

          <CustomFormLabel htmlFor="fs-nav-lang">
            18. What's your native language/Mother Tongue
          </CustomFormLabel>
          <CustomTextField id="fs-nav-lang" placeholder="Other" fullWidth />

          <CustomFormLabel htmlFor="fs-comm-lang">
            20. What language(s) can you communicate in?
          </CustomFormLabel>
          <CustomTextField id="fs-comm-lang" placeholder="English" fullWidth />

          <CustomFormLabel htmlFor="fs-marital-status">
            22. Current Marital Status
          </CustomFormLabel>
          <CustomTextField id="fs-marital-status" placeholder="Single" fullWidth />

          <CustomFormLabel htmlFor="fs-marital-status">
            24. Date - From (Current Residency Status)
          </CustomFormLabel>
          <CustomTextField id="fs-marital-status" placeholder="yyyy-mm-dd" fullWidth />
        </Grid>   

        <Grid item xs={12} sm={6}>
        <CustomFormLabel htmlFor="fs-occ">
            17. Current occupation
          </CustomFormLabel>
          <CustomTextField id="fs-occ" placeholder="Accountant" fullWidth />

          <CustomFormLabel htmlFor="fs-nav-lang">
            19. Choose your native language/mother tongue?
          </CustomFormLabel>
          <CustomTextField id="fs-nav-lang" placeholder="Hindi" fullWidth />

          <CustomFormLabel htmlFor="fs-prof-lang">
            21. Have you taken a test to assess your proficiency in English or French?
          </CustomFormLabel>
          <CustomTextField id="fs-prof-lang" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-uci">
            23. UCI Number, if applicable
          </CustomFormLabel>
          <CustomTextField id="fs-uci" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-uname">
            25. Other name - Family Name(s)
          </CustomFormLabel>
          <CustomTextField id="fs-uname" placeholder="" fullWidth />
        </Grid>        

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
            Relationship Status - Current
          </Typography>
        </Grid>

        <Grid item xs={12}>
        <CustomFormLabel htmlFor="fs-date-married">
        1. Date married or entered common-law relationship
        </CustomFormLabel>
        <CustomTextField id="fs-country-ques" placeholder="yyyy-mm-dd" fullWidth />

        <CustomFormLabel htmlFor="fs-spouse">
        2. Is your spouse or common-law partner a citizen or permanent resident of Canada?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
            Relationship Status - Previous
          </Typography>
        </Grid>

        <Grid item xs={12}>

        <CustomFormLabel htmlFor="fs-married">
        1. Have you previously been married or in a common-law relationship?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
            Mailing Address
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-str-no">
            1. Stree number
        </CustomFormLabel>
        <CustomTextField id="fs-str-no" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-country">
            4. Country
        </CustomFormLabel>
        <CustomTextField id="fs-country" placeholder="Canada" fullWidth />
        
        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-str-name">
            2. Stree name
        </CustomFormLabel>
        <CustomTextField id="fs-str-name" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-province">
            5. Canadian Province (if applicable)
        </CustomFormLabel>
        <CustomTextField id="fs-province" placeholder="ON" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-city">
            3. City/Town
        </CustomFormLabel>
        <CustomTextField id="fs-city" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-post">
            6. Postal Code
        </CustomFormLabel>
        <CustomTextField id="fs-post" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12}>

        <CustomFormLabel htmlFor="fs-married">
        7. Is your Residential address the same as Mailing Address?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
            Contact Details
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2.4}>
        <CustomFormLabel htmlFor="fs-contact-type">
            1. Contact category
        </CustomFormLabel>
        <CustomTextField id="fs-contact-type" placeholder="Telephone number" fullWidth />
        </Grid>
        <Grid item xs={12} sm={2.4}>
        <CustomFormLabel htmlFor="fs-country">
            2. Region
        </CustomFormLabel>
        <CustomTextField id="fs-country" placeholder="Canada/US" fullWidth />
        </Grid>
        <Grid item xs={12} sm={2.4}>
        <CustomFormLabel htmlFor="fs-contact-type">
            3. Type
        </CustomFormLabel>
        <CustomTextField id="fs-contact-type" placeholder="Cell" fullWidth />
        </Grid>
        <Grid item xs={12} sm={2.4}>
        <CustomFormLabel htmlFor="fs-country-code">
            4. Country Code
        </CustomFormLabel>
        <CustomTextField id="fs-country-code" placeholder="" fullWidth />
        </Grid>
        <Grid item xs={12} sm={2.4}>
        <CustomFormLabel htmlFor="fs-phone-no">
            5. Number
        </CustomFormLabel>
        <CustomTextField id="fs-phone-no" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
            Identity document
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
        <CustomFormLabel htmlFor="fs-valid-pass">
            1. Do you have a valid passport/travel document?
          </CustomFormLabel>
          <CustomTextField id="fs-valid-pass" placeholder="Yes/No" fullWidth />

          <CustomFormLabel htmlFor="fs-national-iden">
            3. Do you have a National Identity document?
          </CustomFormLabel>
          <CustomTextField id="fs-national-iden" placeholder="Yes/No" fullWidth />

          <CustomFormLabel htmlFor="fs-pass-date">
            5. Passport Issue Date
          </CustomFormLabel>
          <CustomTextField type="date" id="fs-pass-date" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
        <CustomFormLabel htmlFor="fs-pass-country">
            2. Passport Country of Issue
          </CustomFormLabel>
          <CustomTextField id="fs-pass-country" placeholder="IND" fullWidth />

          <CustomFormLabel htmlFor="fs-pass-no">
            4. Passport Number
          </CustomFormLabel>
          <CustomTextField id="fs-pass-no" placeholder="" fullWidth />

          <CustomFormLabel htmlFor="fs-pass-exp-date">
            6. Passport Expiry Date
          </CustomFormLabel>
          <CustomTextField type="date" id="fs-pass-exp-date" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Confirmation - Membership or association with organizations
          </Typography>
        </Grid>

        <Grid item xs={12}>

        <CustomFormLabel htmlFor="fs-associated">
        1. Have you supported, been a member of, or been associated with any organization/association?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Confirmation - Government Positions
          </Typography>
        </Grid>

        <Grid item xs={12}>

        <CustomFormLabel htmlFor="fs-gov-pos">
        1. Have you held any Government positions?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Confirmation - Military Service
          </Typography>
        </Grid>

        <Grid item xs={12}>

        <CustomFormLabel htmlFor="fs-military-pos">
        1. Have you undertaken any military and/or paramilitary service?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Admissibility
          </Typography>
        </Grid>

        <Grid item xs={12}>

        <CustomFormLabel htmlFor="fs-admi-1">
        1. been convicted of a crime or offence in Canada for which apardon has not been granted under the Criminal Records Act of Canada?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-2">
        2. been convicted of, or are you currently charged with, on trialfor, or party to a crime or offence, or subject of any criminalproceedings in any other country or territory?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-3">
        3. made previous claims for refugee protection in Canada or ata Canadian visa office abroad, in any other country(ies) orterritory(ies), or with the United Nations High Commissioner forRefugees (UNHCR)?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-4">
        4. been refused refugee status, an immigrant or permanentresident visa (including a Certifi cat de sélection du Québec (CSQ)or application to the Provincial Nominee Program) or visitor ortemporary resident visa, to Canada or any other country or territory?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-5">
        5. been refused admission to, or ordered to leave, Canada orany other country or territory?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-6">
        6. been involved in an act of genocide, a war crime or in thecommission of a crime against humanity?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-7">
        7. used, planned or advocated the use of armed struggle orviolence to reach political, religious or social objectives?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-8">
        8. been associated with a group that used, uses, advocated or advocates the use of armed struggle or violence to reach political, religious or social objectives?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-9">
        9. been member of an organization that is or was engaged in an activity that is part of a pattern of criminal activity?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-10">
        10. been detained, incarcerated or put in jail?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-11">
        11. had any serious disease or physical or mental disorder?
        </CustomFormLabel>
        <CustomTextField placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-admi-12" >
        12. If your answer to any of these questions is 'Yes', providedetails:
        </CustomFormLabel>
        <CustomTextField multiline placeholder="" fullWidth />

        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Personal details - your Father
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-father-name">
            1. Family name
        </CustomFormLabel>
        <CustomTextField id="fs-father-name" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-father-country-birth">
            4. Country of Birth
        </CustomFormLabel>
        <CustomTextField id="fs-father-country-birth" placeholder="India" fullWidth />
        
        <CustomFormLabel htmlFor="fs-parents">
            7. Is this parent deceased?
        </CustomFormLabel>
        <CustomTextField id="fs-parents" placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-father-email">
            10. Father's Email (if not deceased)
        </CustomFormLabel>
        <CustomTextField type="email" id="fs-father-email" placeholder="@example.com" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-father-given-name">
            2. Given name
        </CustomFormLabel>
        <CustomTextField id="fs-father-given-name" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-marital">
            5. Marital Status
        </CustomFormLabel>
        <CustomTextField id="fs-marital" placeholder="Married" fullWidth />

        <CustomFormLabel htmlFor="fs-father-acc">
            8. Will your father accompany you to Canada?
        </CustomFormLabel>
        <CustomTextField id="fs-father-acc" placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-father-city">
            11. Town/City of birth
        </CustomFormLabel>
        <CustomTextField id="fs-father-city" placeholder="" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-father-dob">
            3. Date of Birth
        </CustomFormLabel>
        <CustomTextField type="date" id="fs-father-dob" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-father-country">
            6. Country of residence
        </CustomFormLabel>
        <CustomTextField id="fs-father-country" placeholder="India" fullWidth />

        <CustomFormLabel htmlFor="fs-father-occ">
            9. Present Occupation
        </CustomFormLabel>
        <CustomTextField id="fs-father-occ" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-father-address">
            12. Full Residential Address
        </CustomFormLabel>
        <CustomTextField id="fs-father-address" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Personal details - your Mother
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-mother-name">
            1. Mother's maiden name (Family Name at birth)
        </CustomFormLabel>
        <CustomTextField id="fs-mother-name" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-country-birth">
            4. Country of Birth
        </CustomFormLabel>
        <CustomTextField id="fs-mother-country-birth" placeholder="India" fullWidth />
        
        <CustomFormLabel htmlFor="fs-parents">
            7. Is this parent deceased?
        </CustomFormLabel>
        <CustomTextField id="fs-parents" placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-email">
            10. Mother's Email (if not deceased)
        </CustomFormLabel>
        <CustomTextField type="email" id="fs-mother-email" placeholder="@example.com" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-mother-given-name">
            2. Given name
        </CustomFormLabel>
        <CustomTextField id="fs-mother-given-name" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-marital">
            5. Marital Status
        </CustomFormLabel>
        <CustomTextField id="fs-marital" placeholder="Married" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-acc">
            8. Will your mother accompany you to Canada?
        </CustomFormLabel>
        <CustomTextField id="fs-mother-acc" placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-city">
            11. Town/City of birth
        </CustomFormLabel>
        <CustomTextField id="fs-mother-city" placeholder="" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-mother-dob">
            3. Date of Birth
        </CustomFormLabel>
        <CustomTextField type="date" id="fs-mother-dob" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-country">
            6. Country of residence
        </CustomFormLabel>
        <CustomTextField id="fs-mother-country" placeholder="India" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-occ">
            9. Present Occupation
        </CustomFormLabel>
        <CustomTextField id="fs-mother-occ" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-mother-address">
            12. Full Residential Address
        </CustomFormLabel>
        <CustomTextField id="fs-mother-address" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Confirmation - Sibling Information
          </Typography>
        </Grid>

        <Grid item xs={12}>
        <CustomFormLabel htmlFor="fs-sibling">
            1. Do you have any siblings?
        </CustomFormLabel>
        <CustomTextField id="fs-sibling" placeholder="Yes/No" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Personal details - your Sibling
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-sibling-fname">
            1. Family name
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-fname" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-country-birth">
            4. Country of Birth
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-country-birth" placeholder="India" fullWidth />
        
        <CustomFormLabel htmlFor="fs-sibling-relation">
            7. Relationship to you
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-relation" placeholder="Sister" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-email">
            10. Email
        </CustomFormLabel>
        <CustomTextField type="email" id="fs-sibling-email" placeholder="@example.com" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-sibling-given-name">
            2. Given name
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-given-name" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-marital">
            5. Marital Status
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-marital" placeholder="Married" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-acc">
            8. Will this person accompany you to Canada?
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-acc" placeholder="Yes/No" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-city">
            11. Town/City of birth
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-city" placeholder="" fullWidth />

        </Grid>

        <Grid item xs={12} sm={4}>

        <CustomFormLabel htmlFor="fs-sibling-dob">
            3. Date of Birth
        </CustomFormLabel>
        <CustomTextField type="date" id="fs-sibling-dob" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-country">
            6. Country of residence
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-country" placeholder="India" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-occ">
            9. Present Occupation
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-occ" placeholder="" fullWidth />

        <CustomFormLabel htmlFor="fs-sibling-address">
            12. Present Address
        </CustomFormLabel>
        <CustomTextField id="fs-sibling-address" placeholder="" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Confirmation - Dependent Children information
          </Typography>
        </Grid>

        <Grid item xs={12}>
        <CustomFormLabel htmlFor="fs-child">
            1. Do you have any dependent children?
        </CustomFormLabel>
        <CustomTextField id="fs-child" placeholder="Yes/No" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Confirmation - Spouse/Common-law partner Information
          </Typography>
        </Grid>

        <Grid item xs={12}>
        <CustomFormLabel htmlFor="fs-spouse">
            1. Do you have a Spouse/Common-law partner?
        </CustomFormLabel>
        <CustomTextField id="fs-spouse" placeholder="Yes/No" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Divider sx={{ mx: '-24px' }} />
          <Typography variant="h6" mt={2}>
          Personal Details - Spouse/Common-law partner
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-fname" sx={{ mt: 0 }}>
            First Name
          </CustomFormLabel>
          <CustomTextField id="fs-fname" placeholder="John" fullWidth />
          <CustomFormLabel htmlFor="fs-country">Country</CustomFormLabel>
          <CustomSelect
            id="standard-select-currency"
            value={country}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>
          <CustomFormLabel htmlFor="fs-date">Birth Date</CustomFormLabel>
          <CustomTextField type="date" id="fs-date" placeholder="John Deo" fullWidth />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CustomFormLabel htmlFor="fs-lname" sx={{ mt: { sm: 0 } }}>
            Last Name
          </CustomFormLabel>
          <CustomTextField id="fs-lname" placeholder="Deo" fullWidth />
          <CustomFormLabel htmlFor="fs-language">Language</CustomFormLabel>
          <CustomSelect value={language} onChange={handleChange2} fullWidth variant="outlined">
            {lang.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomSelect>

          <CustomFormLabel htmlFor="fs-phone">Phone no</CustomFormLabel>
          <CustomTextField id="fs-phone" placeholder="123 4567 201" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="primary">
              Submit
            </Button>
            <Button variant="text" color="error">
              Cancel
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormSeparator;
