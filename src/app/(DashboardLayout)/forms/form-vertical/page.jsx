'use client';
import { Grid, Typography } from '@mui/material';

// components
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ParentCard from '@/app/components/shared/ParentCard';

import BasicLayout from '@/app/components/forms/form-vertical/BasicLayout';

import BasicIcons from '@/app/components/forms/form-vertical/BasicIcons';
import FormSeparator from '@/app/components/forms/form-vertical/FormSeparator';
import CollapsibleForm from '@/app/components/forms/form-vertical/CollapsibleForm';
import FormTabs from '@/app/components/forms/form-vertical/FormTabs';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'PR Form',
  },
];

const FormVertical = () => {
  return (
    <PageContainer title="PR Form" description="this is PR Form">
      {/* breadcrumb */}
      <Breadcrumb title="PR Form" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ParentCard title="Intake Questionnaire - Permanent Residence Or Canadian Citizenship">
            <FormSeparator />
          </ParentCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FormVertical;
