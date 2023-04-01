<script>
    import { El , Button, FormInput, Label, Checkbox, Card, CardBody, FormField, Icon, Input} from 'yesvelte'
    import Form  from '$form'
    import { UserService } from '$lib/service';
    import { Link } from 'svelte-navigator';


    const submit = ({detail})=>{
        console.log('signingup: ', detail)
        console.log(UserService.signUp(detail))


    }
    let icon = 'eye'
    let passwordType='password'
    let agreeTerm = false
    const agree=()=>{
        agreeTerm = agreeTerm? false: true
    }
    const togglePassrod = ()=>{
        icon = icon ==='eye'? 'eye-off': 'eye'
        passwordType = passwordType==='password'? 'text':'password'
    }

</script>

<El class="page page-center " justifyContent='center'  style="height:100vh; display:flex">
    <El  col='12' colSm='5' >
        <Card size='md'>
            <CardBody>
                <El textAlign='center' tag='h1'>Create New Account</El>
                <Form  on:submit = {submit} let:form>
                    <Form.Input type='text' label='Name' name='name'placeholder='name...' />
                    <Form.Input  label='Email' name='email' type='email' placeholder = 'email...' />
                    <FormField >
                        <Label for="">Password</Label>
                        <Form.Input id='password' name='password' type={passwordType} placeholder='password'>
                            <Button slot='end' on:click={togglePassrod}>
                                <Icon name={icon}/>
                            </Button>
                        </Form.Input>

                        <Label for="confirm-password">Confirm Password</Label>
                        <Form.Input  id='confirm-password' name='confirm-password' type = {passwordType} placeholder='confirm password' >
                            <Button slot='end' on:click={togglePassrod}>
                                <Icon name={icon}/>
                            </Button>
                        </Form.Input>
                    </FormField>

                    <Checkbox on:change={agree} label='Agree to term of service and privacy'></Checkbox>
            
                    
                    <Button mt='3' class='disabled' type='submit' col='12' color='primary'>Sign Up</Button>
                </Form>
            </CardBody>
        </Card>
        <El justifyContent='center' d='flex'>
            <Label>Already have account? <Link to="/signin">Sign In</Link> </Label>
        </El>
    </El>
</El>