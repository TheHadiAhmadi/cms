<script>
    import { El , Button, FormInput, Label, Checkbox, Card, CardBody, FormField, Icon, Input} from 'yesvelte'
    import Form  from '$form'
    import { UserService } from '$lib/service';
    import { Link } from 'svelte-navigator';

    const submit = ({detail})=>{
        console.log('signing in: ', detail)
        let result = UserService.signIn(detail)
        console.log('sign in sresult: ', result)
    }
    let icon = 'eye'
    let passwordType='password'
    let remeberMe = false
    const remeber=()=>{
        remeberMe = remeberMe? false: true
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
                <El textAlign='center' tag='h1'>Login to your Account</El>
                <Form  on:submit = {submit} let:form>
                    <Form.Input  label='Email' name='email' type='email' placeholder = 'email...' />
                    <FormField >
                        <Label for="">Password</Label>
                        <Form.Input id='password' name='password' type={passwordType} placeholder='password'>
                            <Button slot='end' on:click={togglePassrod}>
                                <Icon name={icon}/>
                            </Button>
                        </Form.Input>
                    </FormField>
                    <Checkbox on:change={remeber} label='remeber me'></Checkbox>
                    <Button mt='3' class='disabled' type='submit' col='12' color='primary'>Sign Up</Button>
                </Form>
            </CardBody>
        </Card>
        <El justifyContent='center' d='flex'>
            <Label>If do not have account<Link to="/signup">Sign Up</Link> </Label>
        </El>
    </El>
</El>